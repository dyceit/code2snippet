save(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          saveSnippetDemo(this.ruleForm).then(res => {
            if (res.success) {
              this.$message.success(this.$t('tips.saveSuccess'))
              this.resolve()
            } else {
              this.$message.error(this.$t('tips.saveFail'))
            }
          })
        }
      })
    }
