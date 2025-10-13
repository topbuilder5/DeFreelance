/** @type {import('next').NextConfig} */ 
	
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}
module.exports = nextConfig;   


// ---update test function---


fn test() {
    let env = Env::default();
    let contract_id = env.register(Contract, ());
    let client = ContractClient::new(&env, &contract_id);

    let words = client.hello(&String::from_str(&env, "Dev"));
    assert_eq!(
        words,
        vec![
            &env,
            String::from_str(&env, "Hello"),
            String::from_str(&env, "Dev"),
        ]
    );
}