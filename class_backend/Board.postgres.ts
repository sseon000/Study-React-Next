import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

// @ -> 데코레이터(타입 오알엠에게 테이블임을 알려줌.또한 데코레이터는 함수)
@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    number!: number

    @Column({type: "text"})
    writer!: string

    @Column({type: "text"})
    title!: string

    @Column({type: "text"})
    contents!: string
}