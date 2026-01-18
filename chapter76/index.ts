type shap = { type: "circle" | "rectangle"} | { type: "square"; side: number } | { type: "triangle"; base: number; height: number }

function getArea(shap: shap): number {
    switch (shap.type) {
        case "circle":
            return 100;
        case "rectangle":
            return 150; 
        case "square":
            return 200;
        case "triangle":
            return 300;
        default:
            const err: never = shap;
            throw new Error(`unexpected shape: ${err}`);
    }
}