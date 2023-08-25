// src/types/main.d.ts
declare interface Router {
  name?: string
  path: string
  children?: Array<Router>
  element: any
}

// declare global {
//   interface Router {
//     name?: string
//     path: string
//     children?: Array<Router>
//     element: any
//   }
// }
