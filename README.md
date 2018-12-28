# movieql

## Movie API with GraphQL

**실행 방법**

1. yarn
2. yarn start
3. localhost:4000

**클라이언트 화면과 같이 보고 싶으면 아래 프로젝트를 다운로드해서 같이 실행해주세요.**  
[https://github.com/9min/movieql-client](https://github.com/9min/movieql-client) 

**영화 점수 5점 이상인 것들 최대 3개까지만 가져오기**

```graphql
query {
  movies(limit:3, rating:5) {
    id
    title
    rating
    medium_cover_image
  }
}
```

**영화 하나 고르고 추천 영화까지 함께 받기**

```graphql
query {
  movie(id:7893) {
    id
    title
    rating
    summary
    description_intro
    language
    medium_cover_image
  }
  suggestions(id:7893) {
    title
    rating
  }
}
``` 

출처: [나의 첫번째 GraphQL 서버 만들기](https://www.youtube.com/watch?v=3PZGW5Iwtv4&list=PL7jH19IHhOLOpU_yAYzCO4iQNvdou1AnK)
