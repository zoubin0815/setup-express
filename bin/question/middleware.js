export default () => {
    return {
        type: "checkbox",
        name: "middleware",
        choices: [{
                name: "express",
            },
            {
                name: "Koa",
            }
        ]
    }
}