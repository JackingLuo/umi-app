/** 运行时配置 */
// export function render(oldRender:Function) {
//   if(location.pathname!=='/login'){
//     fetch('/api/auth').then(auth => {
//       if (!auth.isLogin) {
//         location.href = '/login';
//       }
//       oldRender()
//     });
//   }else{
//     oldRender()
//   }
// }