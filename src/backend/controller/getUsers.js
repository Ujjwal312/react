const user = require("../models/User");
exports.getUser = async (req, res) => {
	try {
		const userData = await user.find({});
		console.log(userData);
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
