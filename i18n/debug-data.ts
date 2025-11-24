// frontend/i18n/debug-data.ts
import type { Dict } from "./types";

export type StoryItem = {
  slug: string;
  title: string;
  content: string;
};

export const PROJECT_STORIES: Dict<StoryItem[]> = {
   en: [
    {
      slug: "react-query-infinite-initial-page-param",
      title: "Fixing React Query Infinite Query: Missing initialPageParam",
      content: `Issue:
When implementing infinite scroll with React Query v5, useInfiniteQuery kept throwing “No overload matches this call”. The code looked correct, but TypeScript would not accept it.

Cause:
In v5, initialPageParam became required. If you omit it, TypeScript cannot infer the type of the first page, so none of the overloads match.

Fix:
Add initialPageParam in the useInfiniteQuery options (e.g. "", null, or whatever default cursor your API uses), and make sure getNextPageParam returns a compatible type.

Result:
Type inference returns to normal. Infinite Query can safely load the first page and subsequent pages, and the error disappears.`,
    },
    {
      slug: "appwrite-account-401-guest-scope",
      title: "Appwrite 401: Guest role missing account permission",
      content: `Issue:
On page load, the app was calling account.get(), and the console showed repeated 401 errors with “User (role: guests) missing scopes (['account'])”.

Cause:
Unauthenticated users are guests in Appwrite and do not have permission to access /account. Since the home page was calling account.get() before authentication finished, the request was made while still in a guest state.

Fix:
Remove the account.get() call from the home page. Instead, let the Auth / Router protection layer load home data only after the user is confirmed as logged in.

Result:
Unauthenticated users no longer hit the /account endpoint. The 401 errors are gone, and the sign-in flow plus home loading are much cleaner and more stable.`,
    },
    {
      slug: "home-flash-before-sign-in-redirect",
      title: "Home page flashes briefly before redirecting to sign-in",
      content: `Issue:
When users visited the root route /, the Home page flashed for a moment before automatically redirecting to /sign-in. It looked like a visual flicker and felt unpolished.

Cause:
React Router’s flow is “render first, then navigate in useEffect”. If your auth check and navigate() live inside Home’s useEffect, Home will always mount at least once.

Fix:
Move the auth logic into a Route-level ProtectedLayout. Use isAuthenticated to decide whether to render <Outlet> or immediately <Navigate to="/sign-in" />, instead of doing the check inside Home.

Result:
Unauthenticated users never see the Home UI at all; they are taken straight to the sign-in page. The redirect feels smooth and intentional.`,
    },
    {
      slug: "auth-provider-strict-mode-double-log",
      title: "Why does AuthProvider console.log run multiple times?",
      content: `Issue:
After adding console.log inside AuthProvider, the message appeared four times or more. It looked like useEffect was behaving strangely and running repeatedly.

Cause:
In React 18, StrictMode in development intentionally double-invokes initialization and effects to help catch impure logic. Combined with Provider re-mounts, logs naturally appear multiple times.

Fix:
Keep StrictMode enabled, but avoid putting critical login logic inside effects that may run more than once. Move permission checks to the Router layer, and treat logs as diagnostic only.

Result:
You understand that multiple logs are normal in dev mode and will not happen in production. Auth and permission logic becomes more robust and predictable.`,
    },
    {
      slug: "cookie-fallback-misleading-auth-check",
      title: "The trap of using cookieFallback to detect login state",
      content: `Issue:
Initially, the app used the localStorage key "cookieFallback" (whether it equaled "[]") to decide if the user was logged in. This often caused users who were actually logged in to be forced back to the sign-in page.

Cause:
Appwrite may write cookieFallback in different formats ("[]", "{}", etc.) under different conditions. Using string comparison on this value for auth is unreliable and not an officially recommended approach.

Fix:
Remove cookieFallback checks entirely. Use account.get() as the only trustworthy source for login state, and centralize the logic in your Route protection layer.

Result:
Login status is no longer mis-detected. Redirect behavior becomes stable, and the overall auth logic is cleaner and easier to reason about.`,
    },
    {
      slug: "why-home-renders-before-redirect",
      title: "Why does Home always render before the redirect?",
      content: `Issue:
Even when calling navigate("/sign-in") immediately inside Home’s useEffect, the UI still shows Home for one frame, as if the redirect is too late.

Cause:
By design, React Router renders the Route element first, then handles navigation in an effect. If Home is allowed to mount at all, it will appear briefly.

Fix:
Create a ProtectedLayout at the Route level. Based on isAuthenticated, either return <Outlet> or <Navigate>. This prevents Home from mounting when the user is not authenticated.

Result:
Unauthenticated users never see the Home component at all. Auth protection becomes a pre-check instead of a late redirect, giving a much cleaner UX.`,
    },
    {
      slug: "ts-promise-user-id-error",
      title:
        "TypeScript: Property 'id' does not exist on type 'Promise<User | null>'",
      content: `Issue:
The code used const user = getCurrentUser(); and then accessed user.id. TypeScript immediately complained that 'id' does not exist on type Promise<User | null>.

Cause:
getCurrentUser() is an async function, so it returns a Promise, not the actual User object. Accessing .id on a Promise is a type error.

Fix:
Use await getCurrentUser() or use React Query’s useQuery to get a resolved user object. Also, handle the case where user can be null in all relevant logic.

Result:
Type checks pass again, user.id can be accessed safely, and the code correctly handles “not logged in” or “data not yet loaded” states.`,
    },
    {
      slug: "next16-uncached-data-outside-suspense",
      title: "Next.js 16: Uncached data accessed outside of <Suspense>",
      content: `Issue:
After upgrading to Next.js 16 and enabling cacheComponents, some async server components started throwing “Uncached data accessed outside of <Suspense>”.

Cause:
In this mode, Next expects any data that’s inherently request-time (headers, cookies, uncached fetch, etc.) to be either wrapped in a <Suspense> boundary or accessed via a "use cache" server function.

Fix:
Extract the data access into a server function marked with "use cache", and wrap the UI component that awaits this data in <Suspense>.

Result:
The error disappears. Data fetching and caching behavior become consistent and aligned with Next 16’s intended design.`,
    },
    {
      slug: "gsap-split-text-before-fonts",
      title: "GSAP: SplitText called before fonts are loaded",
      content: `Issue:
When using GSAP SplitText to animate a headline, the console warned that SplitText was being called before fonts finished loading. Sometimes this caused weird line breaks and layout glitches.

Cause:
SplitText relies on the actual glyph metrics (width/height) of the font. If the font is not fully loaded, it cannot measure correctly, so text gets split based on the wrong layout.

Fix:
In React, wait for document.fonts.ready or use a WebFont loader to ensure fonts are fully loaded before initializing the SplitText animation.

Result:
Text splitting and animation become stable, with no more font-loading related errors or visual glitches.`,
    },
    {
      slug: "google-oauth-missing-client-id",
      title: "Google OAuth: Missing required parameter client_id",
      content: `Issue:
After deploying the project to Render, Google sign-in showed “Missing required parameter: client_id”, which looked like the frontend was sending a bad request.

Cause:
The real issue was OAuth configuration. The new Render domain had not been added to the Google Cloud OAuth Authorized redirect URIs, so Google rejected the request and surfaced it as a client_id error.

Fix:
In Google Cloud Console, go to the OAuth settings and add the Render production domain and its exact redirect URL to the whitelist.

Result:
The Google OAuth login flow works correctly again, with no more client_id errors. The sign-in experience is back to normal.`,
    },
    {
      slug: "ffmpeg-g1-keyframe-confusion",
      title: "Understanding ffmpeg -g 1 and per-frame keyframes",
      content: `Issue:
While reading ffmpeg tutorials, you saw the setting -g 1 described as “single frame keyframe” and assumed it was either wrong or only meant as a demo.

Cause:
-g sets the GOP (Group of Pictures) length. -g 1 means every frame is a keyframe. This kills compression efficiency but gives extremely precise seeking and frame-by-frame scrubbing.

Fix:
Recognize that this setting is not an error. It’s appropriate for use cases like slow-motion scrolling, frame-accurate preview, or interactive scrubbing, but not for general video compression.

Result:
-g 1 is no longer confusing. You can choose it when you need perfect seek/scrub behavior, and avoid it when you care more about file size and bandwidth.`,
    },
    {
      slug: "network-alt-svc-empty-response",
      title: "Network Response only shows alt-svc, but no data?",
      content: `Issue:
In DevTools’ Network panel, some responses showed only alt-svc and other HTTP/3-related headers, with no JSON or HTML body. It looked like the API was returning nothing.

Cause:
These responses are protocol-level service announcements, not business data endpoints, so they are not supposed to contain application data.

Fix:
Switch to the XHR / Fetch filter or focus on requests that look like actual API endpoints. Also check WebSocket messages if applicable, to find where the real payload is.

Result:
You can reliably locate the real data-carrying API calls, and you understand that alt-svc responses are normal protocol details, not bugs.`,
    },
    {
      slug: "react-query-loading-null-state",
      title: "Clarifying isPostLoading && !posts in React Query",
      content: `Issue:
On the Home page, React Query was used to load posts, with isPostLoading && !posts determining whether to show a loader. It was confusing to distinguish between undefined and an empty array.

Cause:
While the query is pending, data is undefined; after success, it may be an empty array or a populated list. Without handling these states clearly, UI conditions become inconsistent and can cause flicker.

Fix:
Use posts?.documents ?? [] as a unified fallback, and explicitly design the UI states for loading, empty data, and data present.

Result:
UI behavior becomes predictable. Each state (loading, empty, has data) is clearly defined, reducing cognitive load and making maintenance easier.`,
    },
    {
      slug: "optional-chaining-nullish-coalescing",
      title: "Understanding the safe pattern searchedPosts?.documents ?? []",
      content: `Issue:
The code passed searchedPosts?.documents ?? [] into a child component. At first, this looked unnecessarily complicated and raised doubts about whether it was overkill.

Cause:
Optional chaining ?. prevents errors when searchedPosts is undefined and you try to access .documents. Nullish coalescing ?? provides a safe default (an empty array) when the result is null or undefined.

Fix:
Treat this pattern as a standard safety guard when dealing with async or backend data. Always pass lists through ?. and ?? before mapping or rendering.

Result:
You gain confidence in this safety pattern and dramatically reduce the chance of runtime errors like “Cannot read property 'x' of undefined”.`,
    },
    {
      slug: "console-log-empty-async-race-condition",
      title:
        "Why does console.log print nothing? Understanding async timing and race conditions",
      content: `Issue:
During development, some variables logged by console.log appeared empty or undefined. It looked like a bug, but there was no runtime error—data just was not ready yet.

Cause:
This is usually not a runtime error, but an async timing problem or race condition. Fetch calls, APIs, database queries, or heavy loops may not have finished when console.log runs, so of course it prints nothing.

Fix:
First, clarify the execution order and when data actually becomes available. Then use async/await or Promise chains to ensure console.log runs after the data is ready. For example, await fetchData() before logging so the behavior is fully predictable.

Result:
console.log no longer fires too early and prints empty values. Async flows become easier to control, and you stop mistaking timing issues for runtime errors. Code readability and stability improve significantly.`,
    },
  ],


  /* ------------------------- ZH VERSION ------------------------- */

  zh: [
    {
      slug: "react-query-infinite-initial-page-param",
      title: "修復 React Query Infinite Query：缺少 initialPageParam",
      content: `狀況：
在實作 React Query v5 的 infinite scroll 時，useInfiniteQuery 一直出現「No overload matches this call」，看起來程式碼正確卻過不了型別檢查。

原因：
在 v5 中，initialPageParam 變成必填。如果省略，TypeScript 無法推斷第一頁資料的型別，因此所有 overload 都無法匹配。

處理方式：
在 useInfiniteQuery 的 options 中補上 initialPageParam（例如 ""、null，或與 API 對應的預設游標），並讓 getNextPageParam 回傳相容型別。

處理結果：
型別推斷恢復正常，Infinite Query 可以順利取得第一頁與後續頁面，錯誤完全排除。`,
    },
    {
      slug: "appwrite-account-401-guest-scope",
      title: "Appwrite 401：訪客角色缺少 account 權限",
      content: `狀況：
首頁載入時就呼叫 account.get()，Console 連續出現 401 與「User (role: guests) missing scopes (['account'])」。

原因：
未登入使用者在 Appwrite 中是 guest role，沒有讀取 /account 的權限。而首頁在驗證完成前就先呼叫 account.get()，導致在未登入狀態下就打到這個端點。

處理方式：
將首頁的 API 呼叫移除，改由 Auth / Router 保護層在確認登入後再載入首頁資料。

處理結果：
未登入使用者不再觸發 /account 請求，401 完全消失，登入流程與首頁載入變得乾淨穩定。`,
    },
    {
      slug: "home-flash-before-sign-in-redirect",
      title: "首頁先閃一下再跳轉到登入頁的問題",
      content: `狀況：
使用者直接進入根路由 / 時，畫面會先短暫顯示 Home，再自動導向 /sign-in，看起來像是畫面閃動，體驗不佳。

原因：
React Router 的流程是「先 render，再在 useEffect 中 navigate」。如果登入判斷寫在 Home 的 useEffect，Home 必然會先被掛載一次。

處理方式：
改為在 Route 層實作 ProtectedLayout，使用 isAuthenticated 決定要渲染 <Outlet> 還是直接 <Navigate to="/sign-in" />，避免在 Home 內自行判斷。

處理結果：
未登入使用者不再看到任何 Home 畫面，會直接進到登入頁，導頁流程順暢自然。`,
    },
    {
      slug: "auth-provider-strict-mode-double-log",
      title: "為何 AuthProvider 的 console.log 會出現多次？",
      content: `狀況：
在 AuthProvider 中加入 console.log 後，發現訊息會被印出四次甚至更多，看起來像是 useEffect 被怪異地重複執行。

原因：
React 18 在開發模式下的 StrictMode 會刻意重複執行初始化與 effect，以協助抓出不純的邏輯。再加上 Provider 可能 re-mount，log 次數自然變多。

處理方式：
保留 StrictMode，但避免在 effect 中放關鍵登入邏輯，將權限控制移至 Router 層；log 只作觀察用。

處理結果：
理解多次 log 是開發模式的正常行為，正式環境不會發生，整體登入與權限邏輯也更穩定。`,
    },
    {
      slug: "cookie-fallback-misleading-auth-check",
      title: "使用 cookieFallback 判斷登入狀態的陷阱",
      content: `狀況：
一開始以 localStorage 的 "cookieFallback" 是否為 "[]" 來判斷有沒有登入，結果常常發生明明已登入卻被強制導回登入頁的情況。

原因：
Appwrite 在不同情境下寫入 cookieFallback 的格式可能不同（"[]"、"{}" 等等），以字串比較來判斷登入本身就非常不可靠，也不是官方建議做法。

處理方式：
完全移除 cookieFallback 檢查，只使用 account.get() 作為唯一可信的登入判斷來源，並在 Route 保護層中統一處理。

處理結果：
登入狀態不再誤判，導頁行為穩定許多，也讓整體認證邏輯變得清楚易懂。`,
    },
    {
      slug: "why-home-renders-before-redirect",
      title: "為什麼 Home 一定會先被 render 才跳轉？",
      content: `狀況：
即便在 Home 的 useEffect 中第一時間就呼叫 navigate('/sign-in')，仍然會先看到 Home 一幀，讓人以為程式「攔不及」。

原因：
React Router 的預設機制就是先渲染 Route element，再在 effect 中處理導頁。只要讓 Home 有機會被掛載，它就會顯示出來。

處理方式：
在 Route 層建立 ProtectedLayout，根據 isAuthenticated 直接回傳 <Outlet> 或 <Navigate>，避免 Home 在未通過驗證時被掛載。

處理結果：
未登入使用者完全看不到 Home 畫面，權限控制改為事前防護，導頁體驗更加乾淨。`,
    },
    {
      slug: "ts-promise-user-id-error",
      title:
        "TypeScript：Property 'id' does not exist on type 'Promise<User | null>'",
      content: `狀況：
在程式中寫 const user = getCurrentUser(); 接著使用 user.id，馬上被 TypeScript 抱怨 'id' 並不存在於 Promise<User | null>。

原因：
getCurrentUser() 是 async function，回傳的是 Promise，而不是實際的 User 物件。對 Promise 直接取 .id，型別自然不正確。

處理方式：
使用 await getCurrentUser() 或以 React Query 的 useQuery 取得已解析的 user，並在邏輯上處處考慮 user 可能為 null 的情況。

處理結果：
型別檢查恢復正常，可以安全使用 user.id，也讓程式更能應對尚未登入或資料尚未載入的狀態。`,
    },
    {
      slug: "next16-uncached-data-outside-suspense",
      title: "Next.js 16：Uncached data accessed outside of <Suspense>",
      content: `狀況：
升級到 Next.js 16 並啟用 cacheComponents 後，某些 async server components 開始拋出「Uncached data accessed outside of <Suspense>」錯誤。

原因：
在這個模式下，Next 期望所有需要 request-time 資料（例如 headers、cookies、未快取的 fetch）都被包在 <Suspense> 邊界內，或抽成 use cache 的 server function。

處理方式：
將資料存取抽出成標註 "use cache" 的 server function，並在 UI 端以 <Suspense> 包住等待該資料的元件。

處理結果：
錯誤不再出現，資料抓取與快取策略更加一致，也更符合 Next 16 的官方設計方向。`,
    },

    {
      slug: "gsap-split-text-before-fonts",
      title: "GSAP：SplitText 在字體載入前被呼叫的問題",
      content: `狀況：
在使用 GSAP SplitText 對標題做逐字動畫時，Console 提示 SplitText 在字體載入前被呼叫，有時還會造成斷行與排版異常。

原因：
SplitText 會依據實際字形寬度與高度切割文字。如果字體尚未載入完成，就無法取得正確的度量資訊，自然會導致畫面錯亂或錯誤。

處理方式：
在 React 中等待 document.fonts.ready 或使用 WebFont loader，確保字體載入完畢後再初始化 SplitText 動畫。

處理結果：
文字切割與動畫運作穩定，不再出現字體尚未載入造成的錯誤與怪異視覺。`,
    },
    {
      slug: "google-oauth-missing-client-id",
      title: "Google OAuth：Missing required parameter client_id",
      content: `狀況：
專案部署到 Render 後，使用 Google 登入時出現「Missing required parameter: client_id」，看起來像是前端沒傳對參數。

原因：
其實是 OAuth 設定問題。新的 Render 網域尚未加入 Google Cloud OAuth 的 Authorized redirect URIs，因此請求被 Google 拒絕並以 client_id 錯誤呈現。

處理方式：
到 Google Cloud Console 的 OAuth 設定頁面，將 Render 的正式網域與對應 redirect URL 加入白名單。

處理結果：
Google OAuth 登入流程順利啟動，不再出現 client_id 相關錯誤，使用者登入體驗回到正常。`,
    },

    {
      slug: "ffmpeg-g1-keyframe-confusion",
      title: "理解 ffmpeg 的 -g 1 與每幀 keyframe 設定",
      content: `狀況：
在查 ffmpeg 教學時看到 -g 1 的設定，被描述為「single frame keyframe」，一開始以為這樣設定是不對的或只是示範用。

原因：
-g 代表 GOP（Group of Pictures）長度。-g 1 表示每一幀都是 keyframe，不再依賴前後幀，壓縮效率變差，但 seek 與逐幀預覽會非常精準。

處理方式：
理解這設定並非錯誤，而是適合用在需要慢動作滑動、逐幀檢視等互動場景，而非一般影片壓縮情境。

處理結果：
不再對 -g 1 感到困惑，可以依實際需求選擇是否使用，控制影片體積與操作體驗的平衡。`,
    },
    {
      slug: "network-alt-svc-empty-response",
      title: "Network Response 只有 alt-svc，卻沒有資料？",
      content: `狀況：
在 DevTools 的 Network 面板中點選某個請求，Response 區域只顯示 alt-svc 等 HTTP/3 設定，看不到 JSON 或 HTML，以為 API 沒回任何資料。

原因：
這類回應其實是協議層級的服務宣告，而不是實際的資料端點，因此本來就不會包含業務資料。

處理方式：
改用 XHR / Fetch 過濾或檢查看起來像 API 的請求，必要時也檢查 WebSocket 訊息，鎖定真正回傳內容的端點。

處理結果：
成功找到真正承載資料的 API，理解 alt-svc 並非錯誤，而是正常的協議資訊，不再被這類回應誤導。`,
    },
    {
      slug: "react-query-loading-null-state",
      title: "釐清 React Query 中 isPostLoading && !posts 的邏輯",
      content: `狀況：
在 Home 使用 React Query 取得貼文時，以 isPostLoading && !posts 判斷是否顯示 Loader，對於 undefined 與空陣列狀態感到混亂。

原因：
React Query 在 pending 階段 data 是 undefined，成功之後可能是空陣列或有資料。如果沒清楚處理這些狀態，UI 判斷容易不一致，甚至導致畫面閃爍。

處理方式：
使用 posts?.documents ?? [] 作為統一 fallback，並為 loading、空資料、有資料三種狀態建立清楚的 UI 顯示邏輯。

處理結果：
畫面狀態更可預期，不同階段的顯示結果清楚分明，也降低了日後維護時的認知負擔。`,
    },
    {
      slug: "optional-chaining-nullish-coalescing",
      title: "理解 searchedPosts?.documents ?? [] 這種安全寫法",
      content: `狀況：
在程式中看到 searchedPosts?.documents ?? [] 傳入子元件，一開始不太理解為什麼要寫得這麼複雜，懷疑是否多此一舉。

原因：
optional chaining ?. 用來避免在 searchedPosts 為 undefined 時讀取 .documents 而拋錯；nullish coalescing ?? 則在結果為 null 或 undefined 時提供安全預設值（這裡是空陣列）。

處理方式：
將這種模式視為處理非同步與後端資料時的標準防護寫法，在 map 或渲染列表前一律先經過 ?. 與 ?? 處理。

處理結果：
對這類安全寫法更有信心，未來大幅降低「Cannot read property 'x' of undefined」這種 runtime error 的風險。`,
    },
    {
      slug: "console-log-empty-async-race-condition",
      title: "為什麼 console.log 會印不出來？理解非同步時序與競態問題",
      content: `狀況：
在開發時發現某些變數 console.log 結果是空的或 undefined，看起來像錯誤，但程式並沒有噴 runtime error，只是資料還沒準備好。

原因：
這通常不是 runtime error，而是非同步時序問題或競態條件（race condition）。像 fetch、API、資料庫、迴圈計算都可能還沒完成，而 console.log 已先執行，自然印不出資料。

處理方式：
先釐清流程順序，確保資料何時可用，再以 async/await 或 Promise chain 保證 console.log 在資料完成後執行。例如 await fetchData() 再 log，可以讓行為完全可預期。

處理結果：
console.log 不再因過早執行而出現空值，非同步流程變得容易掌控，也不會再誤以為是 runtime error。程式可讀性與穩定性大幅提升。`,
    },
  ],
};
