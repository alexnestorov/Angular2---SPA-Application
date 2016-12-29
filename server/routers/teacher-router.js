"use strict";
module.exports = (server, teacherController, isAuthenticated) => {
    server.get("/api/teacher/:username", teacherController.findTeacherByUsername);
    server.get("/api/teacher", teacherController.getAllTeachers);
    server.post("/api/teacher", isAuthenticated, teacherController.createTeacher);
    // server.put("/api/teacher/add-mark", teacherController.addMark);
};