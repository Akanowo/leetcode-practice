function findGrantsCap(grantsArray, newBudget) {
	// your code goes here

	// sort the array in descending order
	grantsArray.sort((a, b) => b - a);

	// loop through and pick the lower and upper bound
	for (let i = 0; i < grantsArray.length; i++) {
		if (grantsArray[i] > newBudget) continue;
	}

	// [1000, 120, 100, 50, 2]
}

// Award Budget Cuts
// To solve this problem, we start by checking whether one of the values in grantsArray can be the cap. To do so systematically, we first sort the array in a descending order, and then check the grants one by one, from largest to smallest. Said differently, If a grant grantsArray[i] is not sufficient as a cap since it doesn’t allow us to meet the newBudget constraint, we move on to the next grant grantsArray[i+1]. We continue using smaller and smaller grants as potential caps until we either meet the budget constraint or go below it.

// If none of the grantsArray values helped us meet the new budget constraint, then by definition cap is less than the smallest grant, i.e. 0 < cap < grantsArray[grantsArray.length - 1]. To accommodate this special case, we’ll append for convenience the value 0 to the grantsArray. This will make our calculations easier. Think of it as the N+1 grant only with the value of 0.

// Now, clearly there is no guarantee that any of the values in grantsArray equals to cap. However, what the iteration above helped us do is find a tight lower bound to cap from which we’ll be able to calculate cap.

// Here’s how we do it. We first define a new variable surplus which represents the excess amount we need to cut back i.e. surplus = sum(grantsArray) - newBudget. Next, we iteratively subtract from surplus the amount each grant in grantsArray saves us if it were cap. Our goal is to find the first for which such surplus == 0. Here’s how the first few iterations would look like:

// surplus1 = surplus0 - 1*(grantsArray[0]-grantsArray[1]).
// surplus2 = surplus1 - 2*(grantsArray[1]-grantsArray[2]).
// surplus3 = surplus2 - 3*(grantsArray[2]-grantsArray[3]).
// Notice that we multiply the difference, let’s name it di , between two consecutive grants by i+1 since at every iteration, each of the (i+1) previous grants now needs be lowered by di. The total amount saved is therefore (i+1)*di . The above last step helped us find only a tight lower bound to cap and not necessarily cap itself. But that could be easily fixed. Since surplus at this point is either 0 or less than 0, we simply take the absolute of that value, i.e. -surplus, divide it by (i+1), and add the result to the lower bound we found.
// Pseudocode:

// function findGrantsCap(grantsArray, newBudget):
//     n = grantsArray.length

//     # sort the array in a descending order.
//     grantsArray.sort(reverse=true)

//     # pad the array with a zero at the end to
//     # cover the case where 0 <= cap <= grantsArray[i]
//     grantsArray.push(0)

//     # calculate the total amount we need to
//     # cut back to meet the reduced budget
//     surplus = sum(grantsArray) - newBudget

//     # if there is nothing to cut, simply return
//     # the highest grant as the cap. Recall that
//     # the grants array is sorted in a descending
//     # order, so the highest grant is positioned
//     # at index 0
//     if (surplus <= 0):
//         return grantsArray[0]

//     # start subtracting from surplus the
//     # differences (“deltas”) between consecutive
//     # grants until surplus is less or equal to zero.
//     # Basically, we are testing out, in order, each
//     # of the grants as potential lower bound for
//     # the cap. Once we find the first value that
//     # brings us below zero we break
//     for i from 0 to n-1:
//         surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1]):
//         1 * 1000 - 120
//         if (surplus <= 0):
//             break

//     # since grantsArray[i+1] is a lower bound
//     # to our cap, i.e. grantsArray[i+1] <= cap,
//     # we  need to add to grantsArray[i+1] the
//     # difference: (-total / float(i+1), so the
//     # returned value equals exactly to cap.
//     return grantsArray[i+1] + (-surplus / float(i+1))
// Time Complexity: sorting the grants array takes O(N⋅log(N)), calculating the surplus is O(N) due to the grants summation, and finally the for loop takes another O(N). In total, the time complexity is O(N⋅log(N)) before sorting and O(N) after sorting.

// Space Complexity: throughout the algorithm we used only a constant amount of auxiliary space. The space complexity is therefore O(1).
