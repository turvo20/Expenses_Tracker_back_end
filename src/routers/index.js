import authRouter from "./Auth.router";

export default () =>[
    { path: '/auth', controller: authRouter }
]