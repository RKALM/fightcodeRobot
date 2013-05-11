
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot){
  robot.clone();
  robot.turn(45);
  this.offset = 1;
};

Robot.prototype.onIdle = function(ev) {
  var robot = ev.robot;
  robot.turn(1);
};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot, scannedRobot = ev.scannedRobot;
  if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
      return;
  }
  robot.stop();
  for (var i=0; i < 10; i++) {
    robot.fire();
    robot.ahead(10);
  }
};

Robot.prototype.onWallCollision = function(ev) {
  ev.robot.stop();
  ev.robot.turn(ev.bearing - 180);
  ev.robot.ahead(10)
};

Robot.prototype.onRobotCollided = function(ev) {
  ev.robot.stop();
  this.offset = -1 * this.offset;
  ev.robot.turn(10 * this.offset);
};
