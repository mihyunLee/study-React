import { InMemoryCache, Reference } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launches: {
          keyArgs: false,
          // merge 함수는 캐시된 existing과 incoming을 가져와
          // 단일 목록으로 결합한 후 반환한다.
          // launches는 결합된 목록을 저장하고
          // 필드를 사용하는 모든 쿼리에 반환한다.
          // 캐싱을 통해 Load More 버튼이 동작하게끔 함.
          merge(existing, incoming) {
            let launches: Reference[] = [];
            if (existing && existing.launches) {
              launches = launches.concat(existing.launches);
            }
            if (incoming && incoming.launches) {
              launches = launches.concat(incoming.launches);
            }
            return {
              ...incoming,
              launches,
            };
          },
        },
      },
    },
  },
});
