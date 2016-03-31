var math = new app.classroom.new('math', 'hard')
var science = new app.classroom.new('science', 'hard')

var bobby = new app.student.new('bobby', 'philly')
var susie = new app.student.new('susie', 'pittsburgh')
bobby.classroom = science
susie.classroom = science