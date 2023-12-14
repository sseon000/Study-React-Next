import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMoved = (): void => {
    void router.push(`/section25/25-02-kakao-map-routing-moved`);
  };

  return (
    <>
      <button onClick={onClickMoved}>페이지 이동하기!!!</button>

      {/* 매 페이지를 새로 다운로드 받으므로 SPA 활용 못함 */}
      <a href="/section25/25-02-kakao-map-routing-moved">페이지 이동하기!!</a>
      {/* next에서 제공하는 a태그 이므로, SPA 활용 가능 + <a>를 써서 검색 좋아짐(SEO 채점 유리) */}
      <Link href="/section25/25-02-kakao-map-routing-moved">
        페이지 이동하기!!!
      </Link>
      {/* 의미가 있는 시맨틱 태그의 장점(SEO 채점 유리) */}
      <h1>요리</h1>
      <div>요리</div>
      <section>요리</section>
    </>
  );
}
