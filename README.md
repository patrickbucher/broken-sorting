# Broken Sorting

In `sort.ts`, three sorting algorithms have been implemented:

1. Bubble Sort
2. Insertion Sort
3. Selection Sort

In `main.ts`, those sorting algorithms are demonstrated:

    deno run main.ts

In `sort_test.ts`, those sorting algorithms are tested.

    deno test sort_test.ts

Those rather slow algorithms have been optimized between tags `v0.0.1` and `v0.0.2`. Unfortunately, something broke, but it is unknown which commit introduced the bug.

## Git Bisect

Git's `bisect` command helps finding the commit that introduced a bug by performing a binary search on the commit history.

The search starts on HEAD, which has a bug:

    git bisect start

Search for an older commit that didn't have the bug:

    git log

Look for tag `v0.0.1`, which is known to be correct.

Once found, mark that one as good:

    git bisect good COMMIT

Now test the code base repeatedly (using `deno run` or `deno test`), and based on the outcome, mark the commit as either good or bad:

    git bisect good # if the tests are positive
    git bisect bad  # if the tests are negative

Until the commit introducing the bug is found using binary search.

Once the commit has been found, reset to HEAD and finish bisecting:

    git bisect reset

Now the found commit can be reverted:

    git revert COMMIT

