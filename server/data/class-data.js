/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Class } = models;

    return {
        createClass(grade, subjects, students = []) {
            let cl = new Class({
                grade,
                subjects,
                students
            });

            return new Promise((resolve, reject) => {
                cl.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(cl);
                });
            });
        },
        findClassByGradeAndLetter(grade) {
            return new Promise((resolve, reject) => {
                Class.findOne({ grade })
                    .populate("students")
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        findClassById(id) {
            return new Promise((resolve, reject) => {
                Class.findById(id)
                    .populate("students")
                    .exec((err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        addStudentsToClass(userIds, grade) {
            if(!Array.isArray(userIds)) {
                userIds = [userIds];
            }

            return this.findClassByGradeAndLetter(grade)
                .then(cl => {
                    userIds.forEach(id => {
                        cl.students.push(id);
                    });

                    cl.save();
                })
        }
    };
};