const {
    createProfile,
    getAllProfiles,
    getProfileById,
    getProfileByUserId,
    updateProfile,
    deleteProfile
} = require("./profile.services");

module.exports = {
    // CREATE - Add new profile
    create: (req, res) => {
        const body = req.body;
        createProfile(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error creating profile",
                    data: err
                });
            } else {
                return res.status(201).json({
                    success: 1,
                    message: "Profile created successfully",
                    data: results
                });
            }
        });
    },

    // READ - Get all profiles
    getAll: (req, res) => {
        getAllProfiles((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching profiles",
                    data: err
                });
            } else {
                return res.status(200).json({
                    success: 1,
                    message: "Profiles retrieved successfully",
                    data: results
                });
            }
        });
    },

    // READ - Get profile by ID
    getById: (req, res) => {
        const id = req.params.id;
        getProfileById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching profile",
                    data: err
                });
            } else {
                if (results.length === 0) {
                    return res.status(404).json({
                        success: 0,
                        message: "Profile not found"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: "Profile retrieved successfully",
                    data: results
                });
            }
        });
    },

    // READ - Get profile by user_id
    getByUserId: (req, res) => {
        const user_id = req.params.user_id;
        getProfileByUserId(user_id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error fetching profile",
                    data: err
                });
            } else {
                if (results.length === 0) {
                    return res.status(404).json({
                        success: 0,
                        message: "Profile not found for this user"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: "Profile retrieved successfully",
                    data: results
                });
            }
        });
    },

    // UPDATE - Update profile
    update: (req, res) => {
        const body = req.body;
        updateProfile(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error updating profile",
                    data: err
                });
            } else {
                if (results.affectedRows === 0) {
                    return res.status(404).json({
                        success: 0,
                        message: "Profile not found"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: "Profile updated successfully",
                    data: results
                });
            }
        });
    },

    // DELETE - Delete profile
    delete: (req, res) => {
        const id = req.params.id;
        deleteProfile(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Error deleting profile",
                    data: err
                });
            } else {
                if (results.affectedRows === 0) {
                    return res.status(404).json({
                        success: 0,
                        message: "Profile not found"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: "Profile deleted successfully",
                    data: results
                });
            }
        });
    }
};
