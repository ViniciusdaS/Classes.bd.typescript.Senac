import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert } from "typeorm";
import bcrypt from"bcryptjs";

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  private originalPassword!: string

  constructor(email: string, password: string) {this.email = email, this.password = password}

  @AfterLoad()
  setOriginalPassword() {
    this.originalPassword = this.password; 
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if(this.password !== this.originalPassword) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}

