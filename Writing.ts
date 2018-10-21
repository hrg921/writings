enum Stage {
  Draft = "draft",
  Write = "write",
  Review = "review",
  Published = "published",
  Updated = "updated",
  RePublished = "republished"
}

class Writing {
  public stage: Stage;

  constructor(stage: Stage) {
    this.stage = stage ? stage : Stage.Draft;
  }
}
