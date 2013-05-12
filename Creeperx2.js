
//FightCode can only understand your robot
//if its class is called Robot
var cannonRotated = false;
var Robot = function(robot) {
robot.clone();
 

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
     robot.turnRight(360);





};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot;
  var scanned = ev.scannedRobot;
  if (scanned.id !== robot.parentId && scanned.parentId !== robot.id) {
    robot = ev.robot;
    robot.fire();
		robot.ahead(200);
    robot.fire();
  }
};



//i need else statement for onRobotCollision.
Robot.prototype.onRobotCollision = function(ev) {
var robot = ev.robot;
  var scanned = ev.scannedRobot;
  if (scanned.id !== robot.parentId && scanned.parentId !== robot.id) {
  	    robot.fire();
  		robot.back(20); 
  		robot.ahead(5);
  } else {
    	robot.turnRight(360);
    	
  }
};

Robot.prototype.onHitByBullet = function(ev) {
var robot = ev.robot;
  	robot.disappear(); 
  	robot.ahead(50);
};
