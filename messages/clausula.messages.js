module.exports = {
    success: {
        s0: {
            code: "clausulaCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "clausulaUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "clausulaFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "clausulaDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "Noclausulas",
            type: "success"
        },
        s6: {
            http: 200,
            code: "Activated",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "clausulaNotFound",
            type: "error"
        }
    }
}