
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {
  var rx = robot.position.x;
  var ry = robot.position.y;
  var aH = robot.arenaHeight;
  var aW = robot.arenaWidth;
   robot.clone()
};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    if(robot.parentId) {
        robot.turn(1);
        robot.ahead(1);
        robot.rotateCannon(1);
    }
    else {
        robot.turn(-1);
        robot.rotateCannon(-1);
        robot.ahead(-1);
    }
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    if(robot.parentId) {
        robot.turn(20);
        robot.back(20);
				robot.rotateCannon(-20)
    }
    else {
        robot.turn(-20);
				robot.rotateCannon(20)
        robot.back(100);
    }
};
Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
    if(robot.parentId) {
        robot.turn(20);
        robot.back(20);
    }
    else {
        robot.turn(-20);
        robot.back(100);
    }
};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot, scannedRobot = ev.scannedRobot;
  if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
      return;
  }
  if (scannedRobot.parentId && scannedRobot.id == scannedRobot.parentId) {
      return;
  }
  robot.fire();
//
  if(robot.parentId)
			robot.rotateCannon(-25)
    else
			robot.rotateCannon(25)
};
