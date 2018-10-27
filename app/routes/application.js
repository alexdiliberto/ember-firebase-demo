import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    return this.get('session')
      .fetch()
      .catch((e) => {
        console.error(e);
      });
  },

  model() {
    return this.store.findAll("article");
  },

  actions: {
    signIn(provider) {
      this.get('session')
        .open('firebase', { provider: provider})
        .then((data) => {
          console.log(data.currentUser);
        });
    },
    signOut() {
      this.get('session').close();
    }
  }
});
