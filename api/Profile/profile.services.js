const pool = require("../../config/dbconfig");

module.exports = {
    // CREATE - Insert new profile
    createProfile: (data, callBack) => {
        pool.query(
            `INSERT INTO profile_users(user_id, company_name, cr_number, email_address, phone_number, city, company_address, contact_first_name, contact_last_name, contact_position, contact_direct_phone, logo_url, updated_at) 
             VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.user_id,
                data.company_name,
                data.cr_number,
                data.email_address,
                data.phone_number,
                data.city,
                data.company_address,
                data.contact_first_name,
                data.contact_last_name,
                data.contact_position,
                data.contact_direct_phone,
                data.logo_url,
                new Date()
            ],
            (err, results) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    },

    // READ - Get all profiles
    getAllProfiles: (callBack) => {
        pool.query(
            `SELECT * FROM profile_users`,
            (err, results) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    },

    // READ - Get profile by ID
    getProfileById: (id, callBack) => {
        pool.query(
            `SELECT * FROM profile_users WHERE id = ?`,
            [id],
            (err, results) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    },

    // READ - Get profile by user_id
    getProfileByUserId: (user_id, callBack) => {
        pool.query(
            `SELECT * FROM profile_users WHERE user_id = ?`,
            [user_id],
            (err, results) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    },

    // UPDATE - Update profile by ID
    updateProfile: (data, callBack) => {
        pool.query(
            `UPDATE profile_users SET company_name=?, cr_number=?, email_address=?, phone_number=?, city=?, company_address=?, contact_first_name=?, contact_last_name=?, contact_position=?, contact_direct_phone=?, logo_url=?, updated_at=? WHERE id=?`,
            [
                data.company_name,
                data.cr_number,
                data.email_address,
                data.phone_number,
                data.city,
                data.company_address,
                data.contact_first_name,
                data.contact_last_name,
                data.contact_position,
                data.contact_direct_phone,
                data.logo_url,
                new Date(),
                data.id
            ],
            (err, results) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    },

    // DELETE - Delete profile by ID
    deleteProfile: (id, callBack) => {
        pool.query(
            `DELETE FROM profile_users WHERE id = ?`,
            [id],
            (err, results) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    }
};
