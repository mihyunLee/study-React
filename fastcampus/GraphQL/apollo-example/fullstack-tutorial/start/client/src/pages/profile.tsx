import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";

import { Loading, Header, LaunchTile } from "../components";
import { LAUNCH_TILE_DATA } from "./launches";
import * as GetMyTripsTypes from "./__generated__/GetMyTrips";

export const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
      id
      email
      trips {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { data, loading, error } = useQuery<GetMyTripsTypes.GetMyTrips>(
    GET_MY_TRIPS,
    { fetchPolicy: "network-only" }
    // Apollo Client는 쿼리 결과를 캐시에 저장한다.
    // 가져오는 기본 정책은 cache-first로
    // Apollo Client가 네트워크 요청을 하기 전에 캐시를 확인 후
    // 결과가 있으면 네트워크 요청을 하지 않는다.
    // 하지만 사용자의 예약 목록은 최신 상태로 반영되어야 하기 때문에
    // network-only로 정책을 설정하여 클라이언트가 항상 서버에 쿼리해서
    // 최신 예약 목록을 가져올 수 있도록 해야한다.
  );
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (data === undefined) return <p>ERROR</p>;

  return (
    <Fragment>
      <Header>My Trips</Header>
      {data.me && data.me.trips.length ? (
        data.me.trips.map((launch: any) => (
          <LaunchTile key={launch.id} launch={launch} />
        ))
      ) : (
        <p>You haven't booked any trips</p>
      )}
    </Fragment>
  );
};

export default Profile;
