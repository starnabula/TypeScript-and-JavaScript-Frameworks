

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

 function showMsg(fullname) {
        if (fullname === "") {
        // custom error class
        const error = new NotFoundError("404 not found");
        error.stack = "404 fullname not found";
        throw error;
    }

    if (fullname === "marika") {
        //throw "something went wrong";
        //throw new Error("something went wrong");
        const error = new Error("Invalid input");
        error.name = "ValidationError";
        error.stack = "invalid mary input";
        throw error;
    }
    return fullname;
}

try {
    console.log(showMsg(""));
} catch (error) {
    if (error instanceof NotFoundError) {
    } else {
        console.error(error.name);
        console.error(error.message);
        console.error(error.stack);
    }
} finally {
    console.log("cleanup resources");
}