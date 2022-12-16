const { gql } = require("apollo-server");

// 스키마 설계
const typeDefs = gql`
  # 발사 정보
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  # 로켓 정보
  type Rocket {
    id: ID!
    name: String
    type: String
  }

  # 유저 정보
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
    token: String
  }

  # 미션 정보
  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  # 열거형
  enum PatchSize {
    SMALL
    LARGE
  }

  # 쿼리 정의
  #   type Query {
  #     launches: [Launch]!
  #     launch(id: ID!): Launch
  #     me: User
  #   }

  type Query {
    launches( # replace the current launches query with this one.
      pageSize: Int # 표시할 결과 수
      after: String # 이 필드에 커서를 추가하면 해당 커서 이후에만 결과가 반환된다.
    ): LaunchConnection!
    launch(id: ID!): Launch
    me: User
  }

  # 발사 목록에 대한 커서를 포함하는 래퍼
  type LaunchConnection {
    cursor: String! # Query에서 가져온 목록 다음으로 몇 번부터 추가로 가져올 것인지 설정
    hasMore: Boolean!
    launches: [Launch]!
  }

  # 뮤테이션 정의
  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): User
  }

  # 변경에 대한 응답 정의
  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
