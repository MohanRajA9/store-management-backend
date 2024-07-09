const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        userId: { type: String, required: true },
        password: { type: String, required: true },
        verified: { type: String, required: true },
        role: { type: String, requied: true, default: "user", enum: ["admin", "user"] }
    },
    { timestamps: true }
)

const userModel = mongoose.model("user", userSchema)

module.exports = userModel