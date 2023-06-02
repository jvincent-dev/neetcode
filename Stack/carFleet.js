/**
 * There are n cars going to the same destination along a one-lane road. The destination is target miles away.
 *
 * You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is
 * the speed of the ith car (in miles per hour).
 *
 * A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car
 * will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).
 *
 * A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.
 *
 * If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
 *
 * Return the number of car fleets that will arrive at the destination.
 */

/** solved with https://github.com/kashfifahim
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
export default function carFleet(target, position, speed) {
    /**
    t: 12
    p: 10 8 0 5 3
    s: 2  4 1 1 3

    p: 10 8 5 3 0
    s: 2  4 1 3 1

    fmla: target - pos[i] / speed[i] = time to get to end
    timeToReach: [[pos[i], fmla[i]], ...]
    [[10, 1], [8, 1], [5, 7], [3, 3], [0, 12]]

    fleetCount: 3
    maxTime: 12

    t: 100
    p: 0 2 4
    s: 4 2 1

    p: 4 2 0
    s: 1 2 4
    timeToReach: [[4, 96], [2, 49], [0, 25]]

    fleetCount: 1
    maxTime: 96

    get len of position
    create arr to hold a pair of number ex: [10, 2]
    sort by pos desc
    */

    const posAndSpeed = position.map((currPos, index) => [currPos, speed[index]]);
    const calculateTime = (pos, spd) => (target - pos) / spd;

    posAndSpeed.sort((a, b) => b[0] - a[0]);

    let fleetCount = 0;
    let maxTime = 0;

    posAndSpeed.forEach(([pos, spd]) => {
        const time = calculateTime(pos, spd);

        if (maxTime < time) {
            maxTime = time;
            fleetCount++;
        }
    });

    return fleetCount;
} // time: O(nlogn), space: O(n)
