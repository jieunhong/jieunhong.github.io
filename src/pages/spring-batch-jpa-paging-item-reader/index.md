---
title: 'Spring JpaItemPagingReader row update시 reader 누락 문제'
date: '2023-06-01 12:00'
spoiler: ''
cta: 'Spring'
category: '개발'
---

## 문제상황

예시) 온보딩 챌린지 발행을 위한 대상 유저 Reader

1. JpaPagingItemReader에서 chuck 갯수로 잘라서 Sql문 실행 결과 Process
2. Write 대상 테이블에 Insert
3. 동일한 sql문 실행시 이전 청크 write insert로 인해 작업 완료된 row는 검색되지 않음.
4. JpaPagingItemReader는 offset과 page를 갖고있음.
5. 따라서 실행된 row 수 만큼 누락 문제 발생.

## 대표적인 ItemReader

**1. ItemReader**

: 처리하는 데이터를 모두 메모리에 불러와 저장하고,  chuck 단위로 process를 진행.

**2. Database Reader**

- **Cursor 기반 ItemReader 구현체**

: Database에서 데이터를 Streaming ( ex. literator, next() )

(JpaCursorItemReader의 경우 데이터를 DB에서 모두 읽고 서비스 인스턴스에서 직접 Iterator로 cursor로 동작하는 것처럼 흉내 내는 방식)

(할거면 JdbcCursorItemReader 혹은 HibernateCursorItemReader를 사용 다만

“ Cursor는 하나의 Connection으로 Batch가 끝날때까지 사용되기 때문에 Batch가 끝나기전에 Database와 어플리케이션의 Connection이 먼저 끊어질수 있습니다. “)

- **Paging 기반 ItemReader 구현체**

: 페이지 단위로 한번에 데이터를 조회 (page, offset ..)

(Chuck마다 새로 select)

## 해결방법

**1. Cursor Item Reader 사용**

: 데이터를 모두 읽은 상태에서 차례대로 가져오기 때문에 데이터의 변경사항이 적용되지 않음.

**2. JpaPagingItemReader에서 page를 무조건 0으로 override**

: 변경사항이 반영된 row는 빠지고 신규 row들만 select

**3. ZeroOffsetItemReader 기반**

: pk id로 order by를 한 뒤 offset은 항상 0, 읽었던 마지막 id값을 기억해 그 이후부터 실행.

: MySql에서 예를들어 offset이 10000, limit가 50인 경우. 실제로는 10050row를 select 한 뒤 10000 row를 버리는 방식이라 성능에 문제가 있음. 이것을 개선하기 위해 만들어진 reader

## 관련 문서

[https://jojoldu.tistory.com/336](https://jojoldu.tistory.com/336)

[https://jojoldu.tistory.com/337](https://jojoldu.tistory.com/337)

[https://tech.kakaopay.com/post/ifkakao2022-batch-performance-read/#zerooffsetitemreader](https://tech.kakaopay.com/post/ifkakao2022-batch-performance-read/#zerooffsetitemreader)

[https://jojoldu.tistory.com/528](https://jojoldu.tistory.com/528)

[https://www.eversql.com/faster-pagination-in-mysql-why-order-by-with-limit-and-offset-is-slow/](https://www.eversql.com/faster-pagination-in-mysql-why-order-by-with-limit-and-offset-is-slow/)