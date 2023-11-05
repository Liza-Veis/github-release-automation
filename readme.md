# Automatic GitHub Release Workflow

This GitHub Actions workflow automates the process of creating releases in your GitHub repository. It can be triggered by two types of events: manual triggering using `workflow_dispatch` and closed pull requests targeting the `production` branch. The workflow provides different behaviors based on the trigger event.

⚠️ **Note**: This workflow is not triggered by direct pushes to the target branch but is designed for creating releases based on closed pull requests and manual workflow triggers.
test change
## Triggered by Workflow

If the workflow is manually triggered using `workflow_dispatch`, it offers the following options:

- **Inputs:**
  - **Version Increment Type:** Choose the type of version increment: `patch`, `minor`, or `major`.
  - **Specific Release Version:** Optionally specify a specific release version (e.g., `1.2.3`).

- **Behavior:**
  - If a specific release version is provided, it will be used as the release tag.
  - If no specific version is provided, the workflow will increment the version using the selected increment type (default: `patch`).

## Triggered by Pull Request

If the workflow is triggered by a closed pull request targeting the `production` branch, it will automatically create a release based on the following behavior:

- **Behavior:**
  - If the pull request title includes a version in the format `x.y.z`, the workflow will use that version as the release tag.
  - If no version is provided in the pull request title, the workflow will automatically increment the version with a `patch` increment type.

## Usage

To implement this workflow in your GitHub repository, follow these steps:

1. Create a `.github/workflows` directory in your repository if it doesn't already exist.

2. Within the `.github/workflows` directory, create a new YAML file (e.g., `create-release.yml`) for your workflow.

3. Copy and paste the contents of the provided [`create-release.yml`](./.github/workflows/create-release.yml) into your new YAML file.

4. Ensure you replace any instances of `production` with the name of your target branch.

5. Commit these changes to your repository.
