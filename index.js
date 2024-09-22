// Define a variable to hold the singleton instance
let bankBranchInstance = null;

// Define the Singleton class for BankBranch
class BankBranch {
  constructor(branchInfo) {
    // Check if the instance already exists; if yes, return it; otherwise, create a new instance
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    return bankBranchInstance;
  }

  // Define methods to manage branch information
  getBranchInfo() {
    return this.branchInfo;
  }
}

// Usage
const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); // Outputs: Main Street Branch

const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); // Still outputs: Main Street Branch

console.log(branchA === branchB); // true, both variables point to the same instance