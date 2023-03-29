const main = async () => {
  const unlockTime = '1669119970' // unlock time must be > deployment time.

  const Vault = await ethers.getContractFactory('Vault')
  const vault = await Vault.deploy(unlockTime)

  await vault.deployed()
  console.log('Vault deployed to:', vault.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
