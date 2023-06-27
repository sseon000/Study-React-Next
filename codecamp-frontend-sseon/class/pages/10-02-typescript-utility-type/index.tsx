export default function TypescriptUtilityPage() {
    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }

    // 1. Pick 타입 : 새로운것만 골라서 사용
    type aaa = Pick<IProfile, "name" | "age">

    // 2. Omit 타입 : 제외하고 싶은 것
    type bbb = Omit<IProfile, "school">

    // 3. Partial 타입 : 모두 선택
    type ccc = Partial<IProfile>

    // 4. Required 타입 : 모두 필수
    type ddd = Required<IProfile>

    // 5. Record 타입
    type eee = "철수" | "영희" | "훈이" // Union 타입
    let child: eee
    child = "철수"
    type fff = Record<eee, IProfile> // Record 타입

    // ===== ( type vs interface ) 차이: 선언병합 =====
    interface IProfile { // 같은거 다시 만들수있고, 기존꺼에 합쳐짐
        candy: number
    }

    let profile: Partial<IProfile> = {};
    profile.candy = 10;

}