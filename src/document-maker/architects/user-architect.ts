import { Colors } from '../helpers/colors';
import { AbstractArchitect } from './abstract.architect';

export class UserArchitect extends AbstractArchitect {
  constructor(private user: { name: string; email: string }) {
    super();
  }

  build() {
    this.builder
      .addTitle(`Hello Dear ${this.user.name}`)
      .addEmptyLine()
      .addDefaultLine(`Your email: ${this.user.email} has been deleted`)
      .addEmptyLine()
      .setColor(Colors.ORANGE)
      .setFontSize(5)
      .addCustomLine(`All the best`)

      .build();
  }
}
