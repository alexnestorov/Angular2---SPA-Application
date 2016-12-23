/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Teacher } = models;

    return {
        createTeacher(user, username, subject, classes) {
            let teacher = new Teacher({
                user,
                username,
                subject,
                classes
            });

            return new Promise((resolve, reject) => {
                teacher.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(teacher);
                });
            });
        },
        findTeacherByUserId(user) {
            return new Promise((resolve, reject) => {
                Teacher.findOne({ user })
                    .populate("user", "-password -salt")
                    .populate("classes")
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        findTeacherByUsername(username) {
            let query = { "username": new RegExp(username, "i") };
            return new Promise((resolve, reject) => {
                Teacher.findOne(query)
                    .populate("user", "-password -salt")
                    .populate("classes")
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        findTeacherById(id) {
            return new Promise((resolve, reject) => {
                Teacher.findById(id)
                    .populate("user", "-password -salt")
                    .populate("classes")
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },
    };
};