import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createArticle() {
      let title = this.get('title');
      let article = this.store.createRecord('article',{
        title
      });

      article.save();
    }
  }
});
