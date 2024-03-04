import { useRef, useState } from 'react';

export default function useIntersectionObserver(callback) {
  const [observationTarget, setObservationTarget] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        // entry가 뷰포트 안에 들어오면(isIntersecting = true) callback 함수 호출
        if (!entry.isIntersecting) return null;
        return callback;
      },
      { threshold: 1 } // entry가 뷰포트 안에 1개 들어오면 작동
    )
  );
}
