module.exports = {
    "branchPrefix": "renovate-test-",
    "dependencyDashboard": true,
    "dryRun": null,
    "username": "renovate-bot-kubeflow-ci",
    "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
    "onboarding": true,
    "platform": "github",
    "includeForks": true,
    "repositories": ["ca-scribner/test-charm", "ca-scribner/test-multi-charm", "ca-scribner/argo-operators"],
    "onboardingConfig": {
        "$schema": "https://docs.renovatebot.com/renovate-schema.json",
        "rebaseWhen": "behind-base-branch",
        "dependencyDashboard": true,
        "pip-compile": {
            "fileMatch": ["(^|/)requirements.*\\.in$"]
        }
    }
};
