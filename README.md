<div align="center">
  <img src="https://static.killedbynetflix.info/com/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>Killed by Netflix</h1>
  <p>A tribute and log of beloved, and terrible, shows killed by Netflix.</p>
</div>

<div align="center">

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE)

</div>

## Contribute

To add a product, gather the following information:

- Name (`name`)
- Release Date (`dateOpen`)
- Last episode (`dateClose`)
- Description (`description`)
- IMDB Link (`link`)
- Type (`type`)


If you are not familiar with or do not want to use `git`, submit a [new issue](https://github.com/WPRobson/killedbynetflix/issues/new?template=add-an-obituary.md) requesting the change. If you are already familiar with `git`, follow these steps:

1. If you haven't already, start by [forking](https://help.github.com/en/articles/fork-a-repo) this repository. 
1. [Create a new branch](https://help.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work) in your fork. Name it using the product you want to add 
1. Switch to that branch (should happen automatically if you've just created it) and open the `graveyard.json` file
1. Run `yarn && yarn kill` to start the product addition CLI. This will prompt you for the information and validate you entry as you go. It will write the product information into the `graveyard.json` file for you.
1. After the CLI, run `yarn test` to ensure that the `graveyard.json` is formatted properly and all values are valid.
1. Commit your work in git and [create a Pull Request (PR)](https://help.github.com/en/articles/creating-a-pull-request) using the newly created branch.

For code contributions outside of `graveyard.json`, check out the [Contributing Guide](.github/CONTRIBUTING.md).

### Editorial Guidelines

#### Description
The description should be a single sentence describing the show. It will be attached to a generated sentence like "Cancelled about 6 years ago, Venetian merchant and adventurer Marco Polo journeys across Europe and Asia and lands up as a prisoner in the palace of Kublai Khan, a 13th century Mongolian emperor."

Please be respectful, only use past tense.

