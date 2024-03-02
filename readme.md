# Automatic GitHub Release Workflow

This GitHub Actions workflow automates the process of creating releases in your GitHub repository. There are two workflows, each for different scenarios. [release-please-action](https://github.com/google-github-actions/release-please-action) is used for creating releases.

## Workflow 1: Automatic Release Creation

This workflow automatically creates a release whenever changes are pushed to the main branch. It detects the necessary version based on the changes made since the last release and opens a pull request to update the release version. Upon merging the pull request, it creates a release and updates the CHANGELOG.md file.

This option is suitable for open source and personal projects where you don't need a specific version for the release.

To use this workflow, copy `.github/workflows/create-release-automatic.yml` and `release-please-config.json` to your repository following the same path.

## Workflow 2: Manual Release Creation

This workflow is triggered manually through workflow dispatch. It allows you to specify a specific version for the release using workflow inputs. The rest of the functionality remains the same as the automatic workflow, where it updates the release version, creates a pull request, creates a release after merging it, and updates the CHANGELOG.md file.

This option is suitable for commercial projects where you need to specify a specific version for the release.

To use this workflow, copy `.github/workflows/create-release-manual.yml` and `release-please-config.json` to your repository following the same path.
