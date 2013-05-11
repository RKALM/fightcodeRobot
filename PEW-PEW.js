
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.rotateCannon(360);
robot.ahead(20);
};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    robot.fire();
    robot.rotateCannon(-24)
    robot.fire();
    robot.ahead(20);

};
Robot.prototype.onWallCollision = function(ev) {
  var robot = ev.robot;
  robot.turnRight(ev.bearing + 90);
};

Robot.prototype.onHitByBullet = function(ev) {
robot.ahead(20);
};
