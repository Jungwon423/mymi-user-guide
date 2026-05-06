# MYMI 유저가이드 (Docusaurus)

Docusaurus 3.10 기반 정적 사이트. `MYMI_user_guide/` (GitBook)로부터 마이그레이션됨.

## 핵심 셋업

- **베이스 URL**: `/guide/` — 메인 도메인 `mymi.live` 하위 경로
- **로케일**: `ko` (단일, 추후 en/ja 추가 가능)
- **폰트**: Pretendard (한글+영문 통합, jsDelivr CDN)
- **검색**: 추후 Algolia DocSearch 또는 로컬 검색 플러그인
- **컬러**: 보라 계열 (MYMI 브랜드)

## 로컬 개발

```bash
cd guide-site
npm install
npm run start
```

→ `http://localhost:3000/guide/` 에서 라이브 미리보기.

## 빌드

```bash
npm run build
npm run serve   # 로컬에서 빌드 결과 확인
```

빌드 결과: `build/` 디렉토리.

## 배포

### Vercel (추천)

1. Vercel 대시보드에서 새 프로젝트 생성
2. **Root Directory**: `guide-site` 지정
3. 자동으로 `vercel.json` 인식, 빌드 명령 / 출력 디렉토리 설정됨
4. 환경변수 없음
5. 배포 후 URL: `mymi-guide.vercel.app` (또는 본인 지정)

### 메인 FE에서 `/guide/*` 라우팅

메인 `MYMI_frontend/next.config.js` 또는 별도 `_redirects` (Netlify) 설정으로 프록시:

**Next.js rewrites 방식** (Vercel/Netlify 양쪽 호환):

```js
async rewrites() {
  return [
    {
      source: '/guide/:path*',
      destination: 'https://mymi-guide.vercel.app/guide/:path*',
    },
  ];
}
```

**Netlify `_redirects` 방식**:

```
/guide/*  https://mymi-guide.vercel.app/guide/:splat  200!
```

이렇게 하면 검색엔진은 `mymi.live/guide/*` 한 도메인으로 인식 → SEO 통합.

## 콘텐츠 수정

`docs/` 디렉토리의 마크다운 파일 직접 수정. push 시 Vercel 자동 재배포.

각 .md 파일 frontmatter:
- `sidebar_position`: 사이드바 순서
- `description`: 메타 description (검색 결과에 표시됨)
- `slug`: URL 경로 (`intro.md`만 `slug: /` 사용해서 루트로 매핑)

GitBook의 `{% hint %}` 블록은 Docusaurus admonition으로 자동 변환됨:
- `:::info` / `:::tip` / `:::warning` / `:::danger`

## 사이드바

`docs/{category}/_category_.json` 의 `label` + `position`으로 카테고리명/순서 조정.
페이지 순서는 각 .md 파일 frontmatter `sidebar_position`.

## 마이그레이션 재실행

원본(GitBook 형식)이 `MYMI_user_guide/`에 있고, 변환 스크립트는 `local_scripts/migrate_to_docusaurus.py`. 필요 시 재실행해서 `docs/` 갱신.

## TODO (배포 전 체크)

- [ ] Vercel 프로젝트 생성 + 도메인 연결
- [ ] 메인 FE에 rewrite 추가
- [ ] `docusaurus.config.js`의 `naver-site-verification` content를 실제 코드로 교체
- [ ] (선택) Algolia DocSearch 신청해서 검색 활성화
- [ ] (선택) 커스텀 OG image (`static/img/og-default.png`)
- [ ] GitBook 호스팅 (`mymi-1.gitbook.io/user-guide/`) cutover 또는 redirect
