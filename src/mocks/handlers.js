import { rest } from "msw"
const baseURL = "https://8000-timalexande-djangorestp-lcchcnedohx.ws.codeinstitute-ide.net/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) =>{
        return res(ctx.json({
            "pk": 1,
            "username": "newusertim",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 1,
            "profile_image": "https://res.cloudinary.com/dwxzdd3bf/image/upload/v1/media/../default_profile_bqlhki"
            }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })

]
