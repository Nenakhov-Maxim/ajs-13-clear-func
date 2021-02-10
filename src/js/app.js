
export default function checkHealth(param) {
  let healthyType;
  if (param.health > 50) {
    healthyType = 'healthy';
    return healthyType;
  } if (param.health >= 15 && param.health <= 50) {
    healthyType = 'wounded';
    return healthyType;
  } if (param.health < 15 && param.health >= 0) {
    healthyType = 'critical';
    return healthyType;
  }
  return 0;
}
