const findTheOldest = function (group) {
    let thisYear = new Date().getFullYear();
    let oldest = [];
    let first = group[0].yearOfDeath - group[0].yearOfBirth;
    let second = group[1].yearOfDeath - group[1].yearOfBirth;
    let third = group[2].yearOfDeath - group[2].yearOfBirth;

    if (!group[0].yearOfDeath) {
        first = thisYear - group[0].yearOfBirth;
        if (first > second && first > third) {
            oldest[0] = group[0];
        }
        else if (second > first && second > third) {
            oldest[0] = group[1];
        }
        else {
            oldest[0] = group[2];
        }
    }
    else if (!group[1].yearOfDeath) {
        second = thisYear - group[1].yearOfBirth;
        if (second > first && second > third) {
            oldest[0] = group[1];
        }
        else if (first > second && first > third) {
            oldest[0] = group[0];
        }
        else {
            oldest[0] = group[2];
        }
    }
    else if (!group[2].yearOfDeath) {
        third = thisYear - group[2].yearOfBirth;
        if (third > second && third > first) {
            oldest[0] = group[2];
        }
        else if (second > first && second > third) {
            oldest[0] = group[1];
        }
        else {
            oldest[0] = group[0];
        }
    }

    else if (first > second && first > third) {
        oldest[0] = group[0];
    }
    else if (second > first && second > third) {
        oldest[0] = group[1];
    }
    else {
        oldest[0] = group[2];
    }

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
