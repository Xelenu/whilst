function stoarr(t = "", e = String) {
  return String(t).split(",").map(t => e(t.trim())).filter(t => t)
}
globalThis.C3.Plugins.Eponesh_GameScore.Acts = {
  PlayerSetName(t) {
    this.gp.player.name = t
  },
  PlayerSetAvatar(t) {
    this.gp.player.avatar = t
  },
  PlayerSetScore(t) {
    this.gp.player.score = t
  },
  PlayerAddScore(t) {
    this.gp.player.score += t
  },
  PlayerSet(t, e) {
    this.gp.player.set(t, e)
  },
  PlayerSetFlag(t, e) {
    this.gp.player.set(t, !e)
  },
  PlayerAdd(t, e) {
    this.gp.player.add(t, e)
  },
  PlayerToggle(t) {
    this.gp.player.toggle(t)
  },
  PlayerReset() {
    this.gp.player.reset()
  },
  PlayerRemove() {
    this.gp.player.remove()
  },
  PlayerSync(t = !1, e) {
    return this.gp.player.sync({
      override: t,
      storage: this.mappers.syncStorage[e]
    })
  },
  PlayerEnableAutoSync(t, e = !1, r) {
    return this.gp.player.enableAutoSync({
      interval: t,
      override: e,
      storage: this.mappers.syncStorage[r]
    })
  },
  PlayerDisableAutoSync(t) {
    return this.gp.player.disableAutoSync({
      storage: this.mappers.syncStorage[t]
    })
  },
  PlayerLoad() {
    return this.gp.player.load()
  },
  PlayerLogin() {
    return this.gp.player.login()
  },
  PlayerLogout() {
    return this.gp.player.logout()
  },
  PlayerFetchFields() {
    return this.gp.player.fetchFields()
  },
  PlayerWaitForReady() {
    return this.awaiters.player.ready
  },
  LeaderboardOpen(t, e, r, s, i, a, h) {
    return this.gp.leaderboard.open({
      id: this.gp.player.id,
      orderBy: stoarr(t),
      order: 0 === e ? "DESC" : "ASC",
      limit: r,
      showNearest: h,
      withMe: this.mappers.withMe[s],
      includeFields: stoarr(i),
      displayFields: stoarr(a)
    }).catch(t => {
      this.handleResult(!1, t)
    })
  },
  LeaderboardFetch(e, t, r, s, i, a, h) {
    return this.gp.leaderboard.fetch({
      id: this.gp.player.id,
      orderBy: stoarr(t),
      order: 0 === r ? "DESC" : "ASC",
      limit: s,
      showNearest: h,
      withMe: this.mappers.withMe[i],
      includeFields: stoarr(a)
    }).then(t => {
      this.lastLeaderboardTag = e, this.lastLeaderboardVariant = "default", this.leaderboardInfo = t.leaderboard, this.leaderboard = t.players, this.leaderboardResult = t, this.handleResult(!0), this._trigger(this.conditions.OnLeaderboardFetch), this._trigger(this.conditions.OnLeaderboardAnyFetch)
    }).catch(t => {
      this.handleResult(!1, t), this.lastLeaderboardTag = e, this.lastLeaderboardVariant = "default", this._trigger(this.conditions.OnLeaderboardFetchError), this._trigger(this.conditions.OnLeaderboardAnyFetchError)
    })
  },
  LeaderboardFetchPlayerRating(e, t, r, s, i) {
    return this.gp.leaderboard.fetchPlayerRating({
      showNearest: s,
      id: this.gp.player.id,
      orderBy: stoarr(t),
      includeFields: stoarr(i),
      order: 0 === r ? "DESC" : "ASC"
    }).then(t => {
      this.lastLeaderboardTag = e, this.lastLeaderboardVariant = "default", this.lastLeaderboardPlayerRatingTag = e, this.currentLeaderboardPlayer = Object.assign(this.gp.player.toJSON(), t.player), this.leaderboardPlayerPosition = t.player.position, (this.leaderboardResult = t).topPlayers = [], this.handleResult(!0), this._trigger(this.conditions.OnLeaderboardFetchPlayer), this._trigger(this.conditions.OnLeaderboardAnyFetchPlayer)
    }).catch(t => {
      this.handleResult(!1, t), this.lastLeaderboardTag = e, this.lastLeaderboardVariant = "default", this.lastLeaderboardPlayerRatingTag = e, this._trigger(this.conditions.OnLeaderboardFetchPlayerError), this._trigger(this.conditions.OnLeaderboardAnyFetchPlayerError)
    })
  },
  LeaderboardOpenScoped(t, e, r, s, i, a, h, n) {
    t = {
      id: parseInt(t, 10) || 0,
      tag: t,
      variant: e,
      limit: s,
      showNearest: n,
      order: this.mappers.order[r],
      withMe: this.mappers.withMe[i],
      includeFields: stoarr(a),
      displayFields: stoarr(h)
    };
    return this.gp.leaderboard.openScoped(t).catch(console.warn)
  },
  LeaderboardFetchScoped(e, r, t, s, i, a, h) {
    s = {
      id: parseInt(e, 10) || 0,
      tag: e,
      variant: r,
      limit: s,
      showNearest: h,
      order: this.mappers.order[t],
      withMe: this.mappers.withMe[i],
      includeFields: stoarr(a)
    };
    return this.gp.leaderboard.fetchScoped(s).then(t => {
      this.lastLeaderboardTag = e, this.lastLeaderboardVariant = r, this.leaderboardInfo = t.leaderboard, this.leaderboard = t.players, this.leaderboardResult = t, this.handleResult(!0), this._trigger(this.conditions.OnLeaderboardFetch), this._trigger(this.conditions.OnLeaderboardAnyFetch)
    }).catch(t => {
      this.handleResult(!1, t), this.lastLeaderboardTag = e, this.lastLeaderboardVariant = r, this._trigger(this.conditions.OnLeaderboardFetchError), this._trigger(this.conditions.OnLeaderboardAnyFetchError)
    })
  },
  LeaderboardFetchPlayerRatingScoped(e, r, t, s, i) {
    s = {
      id: parseInt(e, 10) || 0,
      tag: e,
      variant: r,
      showNearest: s,
      order: this.mappers.order[t],
      includeFields: stoarr(i)
    };
    return this.gp.leaderboard.fetchPlayerRatingScoped(s).then(t => {
      this.lastLeaderboardPlayerRatingTag = e, this.lastLeaderboardTag = e, this.lastLeaderboardVariant = r, this.currentLeaderboardPlayer = Object.assign(this.gp.player.toJSON(), t.player), this.leaderboardPlayerPosition = t.player.position, (this.leaderboardResult = t).topPlayers = [], this.handleResult(!0), this._trigger(this.conditions.OnLeaderboardFetchPlayer), this._trigger(this.conditions.OnLeaderboardAnyFetchPlayer)
    }).catch(t => {
      this.handleResult(!1, t), this.lastLeaderboardPlayerRatingTag = e, this.lastLeaderboardTag = e, this.lastLeaderboardVariant = r, this._trigger(this.conditions.OnLeaderboardFetchPlayerError), this._trigger(this.conditions.OnLeaderboardAnyFetchPlayerError)
    })
  },
  LeaderboardPublishRecord(e, r, t) {
    var s = this.leaderboardRecords[e],
      s = s ? s[r] : null,
      i = parseInt(e, 10) || 0;
    return this.gp.leaderboard.publishRecord({
      id: i,
      tag: e,
      variant: r,
      override: t,
      record: s
    }).then(t => {
      this.lastLeaderboardTag = e, this.lastLeaderboardVariant = r, this.lastLeaderboardPlayerRatingTag = e, this.leaderboardRecords[e] || (this.leaderboardRecords[e] = {}), this.leaderboardRecords[e][r] = t.record, this.handleResult(!0), this._trigger(this.conditions.OnLeaderboardPublishRecord)
    }).catch(t => {
      this.handleResult(!1, t), this.lastLeaderboardTag = e, this.lastLeaderboardVariant = r, this.lastLeaderboardPlayerRatingTag = e, this._trigger(this.conditions.OnLeaderboardPublishRecordError)
    })
  },
  LeaderboardSetRecord(t, e, r, s) {
    this.leaderboardRecords[t] || (this.leaderboardRecords[t] = {}), this.leaderboardRecords[t][e] || (this.leaderboardRecords[t][e] = {}), this.leaderboardRecords[t][e][r] = s
  },
  AchievementsOpen() {
    return this.gp.achievements.open().catch(console.warn)
  },
  AchievementsFetch() {
    return this.gp.achievements.fetch().then(t => {
      this.achievements = t.achievements, this.achievementsGroups = t.achievementsGroups, this.playerAchievements = t.playerAchievements, this.handleResult(!0), this._trigger(this.conditions.OnAchievementsFetch)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnAchievementsFetchError)
    })
  },
  AchievementsUnlock(t) {
    return this.gp.achievements.unlock(this.getIdOrTag(t))
  },
  AchievementsSetProgress(t, e) {
    const r = this.getIdOrTag(t);
    return r.progress = Number(e), this.gp.achievements.setProgress(r)
  },
  PaymentsFetchProducts() {
    return this.gp.payments.fetchProducts().then(t => {
      this.products = t.products, this.playerPurchases = t.playerPurchases, this.handleResult(!0), this._trigger(this.conditions.OnPaymentsFetchProducts)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnPaymentsFetchProductsError)
    })
  },
  PaymentsPurchase(t) {
    return this.gp.payments.purchase(this.getIdOrTag(t))
  },
  PaymentsConsume(t) {
    var e = parseInt(t, 10) || 0;
    return this.gp.payments.consume(0 < e ? {
      id: e
    } : {
      tag: t
    }).then(t => {
      this.isConsumeProductSuccess = t.success, this.consumeProductError = t.error || "", this.handleResult(t.success, t.error);
      var e = t.product || {};
      if (this.consumedProductId = e.id || 0, this.consumedProductTag = e.tag || "", t.success) return this._trigger(this.conditions.OnPaymentsConsume), void this._trigger(this.conditions.OnPaymentsAnyConsume);
      this._trigger(this.conditions.OnPaymentsConsumeError), this._trigger(this.conditions.OnPaymentsAnyConsumeError)
    }).catch(t => {
      this.isConsumeProductSuccess = !1, this.consumeProductError = this.etos(t), this.handleResult(!1, t), this._trigger(this.conditions.OnPaymentsConsumeError), this._trigger(this.conditions.OnPaymentsAnyConsumeError)
    })
  },
  PaymentsSubscribe(t) {
    return this.gp.payments.subscribe(this.getIdOrTag(t))
  },
  PaymentsUnsubscribe(t) {
    var e = parseInt(t, 10) || 0;
    return this.gp.payments.unsubscribe(0 < e ? {
      id: e
    } : {
      tag: t
    }).then(t => {
      this.isUnsubscribeProductSuccess = t.success, this.handleResult(t.success, t.error);
      var e = t.product || {},
        r = t.purchase || {};
      if (this.currentPurchase = r, this.currentProduct = e, this.currentProductPurchases = 1, this.purchasedProductId = e.id || 0, this.purchasedProductTag = e.tag || "", t.success) return this._trigger(this.conditions.OnPaymentsUnsubscribe), void this._trigger(this.conditions.OnPaymentsAnyUnsubscribe);
      this._trigger(this.conditions.OnPaymentsUnsubscribeError), this._trigger(this.conditions.OnPaymentsAnyUnsubscribeError)
    }).catch(t => {
      this.isUnsubscribeProductSuccess = !1, this.handleResult(!1, t), this._trigger(this.conditions.OnPaymentsUnsubscribeError), this._trigger(this.conditions.OnPaymentsAnySubscribeError)
    })
  },
  ImagesFetch(t, e, r, s) {
    return this.gp.images.fetch({
      playerId: e,
      limit: r,
      offset: s,
      tags: stoarr(t)
    }).then(t => {
      this.images = t.items, this.canLoadMoreImages = t.canLoadMore, this.handleResult(!0), this._trigger(this.conditions.OnImagesFetch)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnImagesFetchError)
    })
  },
  ImagesFetchMore(t, e, r) {
    return this.gp.images.fetchMore({
      playerId: e,
      limit: r,
      tags: stoarr(t)
    }).then(t => {
      this.images = t.items, this.canLoadMoreImages = t.canLoadMore, this.handleResult(!0), this._trigger(this.conditions.OnImagesFetchMore)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnImagesFetchMoreError)
    })
  },
  ImagesUpload(t) {
    return this.gp.images.upload({
      tags: stoarr(t)
    }).then(t => {
      this.currentImage = t || {}, this.handleResult(!0), this._trigger(this.conditions.OnImagesUpload)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnImagesUploadError)
    })
  },
  ImagesUploadUrl(t, e) {
    return this.gp.images.uploadUrl({
      url: t,
      tags: stoarr(e)
    }).then(t => {
      this.currentImage = t || {}, this.handleResult(!0), this._trigger(this.conditions.OnImagesUpload)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnImagesUploadError)
    })
  },
  ImagesChooseFile() {
    return this.gp.images.chooseFile().then(t => {
      this.lastImageTempUrl = t.tempUrl, this.handleResult(!0), this._trigger(this.conditions.OnImagesChoose)
    }).catch(t => {
      this.handleResult(!1, t), this.lastImageTempUrl = "", this.isLastActionSuccess = !1, this._trigger(this.conditions.OnImagesChooseError)
    })
  },
  FilesFetch(t, e, r, s) {
    return this.gp.files.fetch({
      playerId: e,
      limit: r,
      offset: s,
      tags: stoarr(t)
    }).then(t => {
      this.files = t.items, this.canLoadMoreFiles = t.canLoadMore, this.handleResult(!0), this._trigger(this.conditions.OnFilesFetch)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnFilesFetchError)
    })
  },
  FilesFetchMore(t, e, r) {
    return this.gp.files.fetchMore({
      playerId: e,
      limit: r,
      tags: stoarr(t)
    }).then(t => {
      this.files = t.items, this.canLoadMoreFiles = t.canLoadMore, this.handleResult(!0), this._trigger(this.conditions.OnFilesFetchMore)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnFilesFetchMoreError)
    })
  },
  FilesUpload(t) {
    return this.gp.files.upload({
      tags: stoarr(t)
    }).then(t => {
      this.currentFile = t || {}, this.handleResult(!0), this._trigger(this.conditions.OnFilesUpload)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnFilesUploadError)
    })
  },
  FilesUploadUrl(t, e, r) {
    return this.gp.files.uploadUrl({
      url: t,
      filename: e,
      tags: stoarr(r)
    }).then(t => {
      this.currentFile = t || {}, this.handleResult(!0), this._trigger(this.conditions.OnFilesUpload)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnFilesUploadError)
    })
  },
  FilesUploadContent(t, e, r) {
    return this.gp.files.uploadContent({
      content: t,
      filename: e,
      tags: stoarr(r)
    }).then(t => {
      this.currentFile = t || {}, this.handleResult(!0), this._trigger(this.conditions.OnFilesUpload)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnFilesUploadError)
    })
  },
  FilesLoadContent(t) {
    return this.gp.files.loadContent(t).then(t => {
      this.lastFileContent = t, this.handleResult(!0), this._trigger(this.conditions.OnFilesLoadContent)
    }).catch(t => {
      this.lastFileContent = "", this.handleResult(!1, t), this._trigger(this.conditions.OnFilesLoadContentError)
    })
  },
  FilesChooseFile(t) {
    return this.gp.files.chooseFile(t).then(t => {
      this.lastFileTempUrl = t.tempUrl, this.handleResult(!0), this._trigger(this.conditions.OnFilesChoose)
    }).catch(t => {
      this.handleResult(!1, t), this.lastFileTempUrl = "", this.isLastActionSuccess = !1, this._trigger(this.conditions.OnFilesChooseError)
    })
  },
  VariablesFetch() {
    return this.gp.variables.fetch().then(() => {
      this.handleResult(!0), this._trigger(this.conditions.OnVariablesFetch)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnVariablesFetchError)
    })
  },
  PlatformVariablesFetch(t = "") {
    t = t.split(",").reduce((t, e) => {
      const [r, s] = e.split("=");
      return r && s && (t[r.trim()] = s.trim()), t
    }, {});
    return this.gp.variables.fetchPlatformVariables({
      clientParams: t
    }).then(t => {
      this.handleResult(!0), this.platformVariables = t, this._trigger(this.conditions.OnPlatformVariablesFetch)
    }).catch(t => {
      this.handleResult(!1, t), this._trigger(this.conditions.OnPlatformVariablesFetchError)
    })
  },
  FullscreenOpen() {
    return this.gp.fullscreen.open()
  },
  FullscreenClose() {
    return this.gp.fullscreen.close()
  },
  FullscreenToggle() {
    return this.gp.fullscreen.toggle()
  },
  AdsShowFullscreen(t = !1) {
    return this.gp.ads.showFullscreen({
      showCountdownOverlay: t
    })
  },
  AdsShowRewarded(t = !1, e = "") {
    return this.lastRewardedTag = e, this.gp.ads.showRewardedVideo({
      showRewardedFailedOverlay: t
    })
  },
  AdsShowPreloader() {
    return this.gp.ads.showPreloader()
  },
  AdsShowSticky() {
    return this.gp.ads.showSticky()
  },
  AdsCloseSticky() {
    return this.gp.ads.closeSticky()
  },
  AdsRefreshSticky() {
    return this.gp.ads.refreshSticky()
  },
  AnalyticsHit(t) {
    return this.gp.analytics.hit(t)
  },
  AnalyticsGoal(t, e) {
    return this.gp.analytics.goal(t, e)
  },
  SocialsShare(t, e, r) {
    return this.gp.socials.share({
      text: t,
      url: e,
      image: r
    })
  },
  SocialsPost(t, e, r) {
    return this.gp.socials.post({
      text: t,
      url: e,
      image: r
    })
  },
  SocialsInvite(t, e, r) {
    return this.gp.socials.invite({
      text: t,
      url: e,
      image: r
    })
  },
  SocialsJoinCommunity() {
    return this.gp.socials.joinCommunity()
  },
  UniquesRegister(t, e) {
    return this.gp.uniques.register({
      tag: t,
      value: e
    })
  },
  UniquesCheck(t, e) {
    return this.gp.uniques.check({
      tag: t,
      value: e
    })
  },
  UniquesDelete(t) {
    return this.gp.uniques.delete({
      tag: t
    })
  },
  StorageGet(t) {
    return this.gp.storage.get(t)
  },
  StorageSet(t, e) {
    return this.gp.storage.set(t, e)
  },
  StorageGetGlobal(t) {
    return this.gp.storage.getGlobal(t)
  },
  StorageSetGlobal(t, e) {
    return this.gp.storage.setGlobal(t, e)
  },
  StorageSetStorage(t) {
    return this.gp.storage.setStorage(this.mappers.storageType[t])
  },
  GamesCollectionsOpen(t) {
    var e = parseInt(t, 10) || 0;
    return this.gp.gamesCollections.open(0 < e ? {
      id: e
    } : {
      tag: t || "ANY"
    })
  },
  GamesCollectionsFetch(e) {
    var t = parseInt(e, 10) || 0;
    return this.gp.gamesCollections.fetch(0 < t ? {
      id: t
    } : {
      tag: e
    }).then(t => {
      this.lastGamesCollectionIdOrTag = e, this.gamesCollection = t, this._trigger(this.conditions.OnGamesCollectionsFetch), this._trigger(this.conditions.OnGamesCollectionsFetchAny)
    }).catch(t => {
      this.handleResult(!1, t), this.lastGamesCollectionIdOrTag = e, this.gamesCollectionFetchError = t && t.message || "", this._trigger(this.conditions.OnGamesCollectionsFetchError), this._trigger(this.conditions.OnGamesCollectionsFetchAnyError)
    })
  },
  DocumentsOpen(t) {
    t = this.mappers.documentTypes[t];
    return this.gp.documents.open({
      type: t
    })
  },
  DocumentsFetch(t, e) {
    const r = this.mappers.documentTypes[t];
    t = this.mappers.documentFormat[e];
    return this.gp.documents.fetch({
      type: r,
      format: t
    }).then(t => {
      this.lastDocumentType = r, this.document = t, this._trigger(this.conditions.OnDocumentsFetch), this._trigger(this.conditions.OnDocumentsFetchAny)
    }).catch(t => {
      this.handleResult(!1, t), this.documentFetchError = this.etos(t), this.lastDocumentType = r, this._trigger(this.conditions.OnDocumentsFetchError), this._trigger(this.conditions.OnDocumentsFetchAnyError)
    })
  },
  PlayersFetch(e, t) {
    return this.gp.players.fetch({
      ids: stoarr(t, Number)
    }).then(t => {
      this.lastPlayersTag = e, this.playersList = t.players, this.handleResult(!0), this._trigger(this.conditions.OnPlayersFetch), this._trigger(this.conditions.OnPlayersAnyFetch)
    }).catch(t => {
      this.lastPlayersTag = e, this.handleResult(!1, t), this._trigger(this.conditions.OnPlayersFetchError), this._trigger(this.conditions.OnPlayersAnyFetchError)
    })
  },
  PlayersFetchOne(e, t) {
    return this.gp.players.fetch({
      ids: [Number(t)]
    }).then(t => {
      this.lastPlayersTag = e, t.players[0] ? (this.playersList = t.players, this.currentPlayersIndex = 0, this.currentPlayersPlayer = t.players[0], this.handleResult(!0), this._trigger(this.conditions.OnPlayersFetch), this._trigger(this.conditions.OnPlayersAnyFetch)) : (this.handleResult(!1, new Error("player_not_found")), this._trigger(this.conditions.OnPlayersFetchError), this._trigger(this.conditions.OnPlayersAnyFetchError))
    }).catch(t => {
      this.lastPlayersTag = e, this.handleResult(!1, t), this._trigger(this.conditions.OnPlayersFetchError), this._trigger(this.conditions.OnPlayersAnyFetchError)
    })
  },
  WindowsShowConfirm(t, e, r, s, i) {
    return this.gp.windows.showConfirm({
      title: t,
      description: e,
      textConfirm: r,
      textCancel: s,
      invertButtonColors: i
    }).catch(console.warn)
  },
  AppAddShortcut() {
    return this.gp.app.addShortcut()
  },
  AppRequestReview() {
    return this.gp.app.requestReview()
  },
  ChangeLanguage(t) {
    return this.gp.changeLanguage(this.mappers.language[t])
  },
  ChangeLanguageByCode(t = "") {
    return this.gp.changeLanguage(t.toLowerCase())
  },
  ChangeAvatarGenerator(t) {
    return this.gp.changeAvatarGenerator(this.mappers.avatarGenerator[t])
  },
  SetBackground(t, e, r) {
    return this.gp.setBackground({
      url: t,
      blur: e,
      fade: r
    })
  },
  LoadOverlay() {
    return this.gp.loadOverlay()
  },
  Pause() {
    return this.gp.pause()
  },
  Resume() {
    return this.gp.resume()
  },
  Mute() {
    return this.gp.sounds.mute()
  },
  Unmute() {
    return this.gp.sounds.unmute()
  },
  MuteSFX() {
    return this.gp.sounds.muteSFX()
  },
  UnmuteSFX() {
    return this.gp.sounds.unmuteSFX()
  },
  MuteMusic() {
    return this.gp.sounds.muteMusic()
  },
  UnmuteMusic() {
    return this.gp.sounds.unmuteMusic()
  },
  GameStart() {
    return this.gp.gameStart()
  },
  GameplayStart() {
    return this.gp.gameplayStart()
  },
  GameplayStop() {
    return this.gp.gameplayStop()
  },
  SocialsAddShareUrlParam(t, e) {
    this.shareParams[t] = e
  },
  SocialsResetShareParams() {
    this.shareParams = {}
  },
  RewardsAccept(t) {
    return this.gp.rewards.accept(this.getIdOrTag(t))
  },
  RewardsGive(t, e) {
    const r = this.getIdOrTag(t);
    return r.lazy = !!e, this.gp.rewards.give(r)
  },
  TriggersClaim(t) {
    return this.gp.triggers.claim({
      id: t,
      tag: t
    })
  },
  SchedulersRegister(t) {
    return this.gp.schedulers.register(this.getIdOrTag(t))
  },
  SchedulersClaimDay(t, e) {
    return this.gp.schedulers.claimDay(t, e)
  },
  SchedulersClaimDayAdditional(t, e, r) {
    return this.gp.schedulers.claimDayAdditional(t, e, r)
  },
  SchedulersClaimAllDay(t, e) {
    return this.gp.schedulers.claimAllDay(t, e)
  },
  SchedulersClaimAllDays(t) {
    return this.gp.schedulers.claimAllDays(t)
  },
  EventsJoin(t) {
    return this.gp.events.join(this.getIdOrTag(t))
  },
  LoadFromJSON(t) {
    try {
      var e = JSON.parse(t);
      if (!("isReady" in e)) throw new Error("Data was corrupted");
      this.LoadFromJson(e)
    } catch (t) {
      this._trigger(this.conditions.OnLoadJsonError)
    }
  }
};