"use strict";
module.exports = function (data) {
    return {
        findClassByGradeAndLetter(req, res) {
            let grade = req.query.grade;
            return data.findClassByGradeAndLetter(grade)
                .then(cl => {
                    res.json(JSON.stringify(cl));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        createClass(req, res) {
            let {
                grade,
                subjects,
                students
            } = req.body;

            return data.createClass(grade, subjects, students)
                .then(cl => {
                    res.json(JSON.stringify(cl));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        addStudentsToClass(req, res) {
            let {
                grade,
                students
            } = req.body;

            return data.addStudentsToClass(students, grade)
                .then(cl => {
                    res.json(JSON.stringify(cl));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        }
    };
};