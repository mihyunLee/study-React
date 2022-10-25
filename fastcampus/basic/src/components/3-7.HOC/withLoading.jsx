import React from "react";
import { useState, useEffect } from "react";

export default function withLoading(Component) {
  // HOC Component
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), [3000]);

      return () => {
        clearTimeout(timer);
      };
    }, []);

    // 모든 props를 래핑된 컴포넌트에 전달
    // 원본 컴포넌트 변경 금지
    return loading ? <p>Loading...</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
}
