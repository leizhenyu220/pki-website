<template>
  <div class="personal">
    <nav-menu></nav-menu>
    <div class="product-content grey-bg">
      <div class="main">
        <div class="crumbs">
          <crumb></crumb>
        </div>
        <div class="personal-information-content">
          <div class="personal-information-toggle white-bg">
            <div class="personal-information-photo">
              <div class="personal-header-photo">
                <img src="@/assets/images/pki-web_58.png" alt="">
              </div>
              <div class="personal-information-phone">13843006161</div>
            </div>
            <div class="personal-toggle">
              <div class="personal-toggle-item" v-for="(item, index) in personalToggle" :key="index"
                   @click="togglePersonal(item, index)" :class="{personalToggleActive: index == toggleContent}">
                <i class="personal-toggle-icons" :class="item.class"></i>
                <div class="personal-toggle-title">{{ item.title }}</div>
              </div>
            </div>
          </div>
          <div class="right" :ref="'rightHeight' + toggleContent" v-if="toggleContent == 0">
            <div class="personal-information-right white-bg">
              <div class="basic personal-r">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">个人信息</div>
                </div>
                <div class="personal-information-basic-tips" v-show="showTips">
                  <i class="personal-information-basic-tips-icon f-left"></i>
                  <div class="personal-information-basic-text">您的个人信息尚未完善,请完善个人信息</div>
                </div>
                <div class="personal-form">
                  <el-form ref="basicForm" :model="basicForm" label-width="110px" :rules="basicRules">
                    <el-form-item label="手机号码">
                      <el-input class="readonly" :readonly="true" v-model="basicForm.basicPhone"></el-input>
                    </el-form-item>
                    <el-form-item prop="basicUser" label="用户名">
                      <el-input v-model="basicForm.basicUser"></el-input>
                      <span ref="formNull" class="form-null" v-if="basicForm.basicUser == ''">未填写</span>
                    </el-form-item>
                    <el-form-item prop="basicName" label="姓名">
                      <el-input v-model="basicForm.basicName"></el-input>
                      <span ref="formNull" class="form-null" v-if="basicForm.basicName == ''">未填写</span>
                    </el-form-item>
                    <el-form-item prop="basicEmail" label="邮箱">
                      <el-input v-model="basicForm.basicEmail"></el-input>
                      <span ref="formNull" class="form-null" v-if="basicForm.basicEmail == ''">未填写</span>
                    </el-form-item>
                    <el-form-item prop="basicEnterpriseName" label="企业名称">
                      <el-input v-model="basicForm.basicEnterpriseName"></el-input>
                      <span ref="formNull" class="form-null" v-if="basicForm.basicEnterpriseName == ''">未填写</span>
                    </el-form-item>
                    <el-form-item prop="basicFileList" label="身份证照片" class="authentication-file-upload">
                      <div class="authentication-file-item" style="margin-right: 20px;">
                        <el-upload
                            action="#"
                            list-type="picture-card"
                            :auto-upload="false"
                            :limit="1">
                          <img src="@/assets/images/pki-web_59.png" alt="" slot="default" @click="fileControlToggle('basicPositive')" v-show="basicPositive">
                          <div slot="file" slot-scope="{file}">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
                            <span class="el-upload-list__item-actions">
                            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file, 'basiPositive')">
                              <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!basicDisabledPositive" class="el-upload-list__item-delete" @click="handleDownload(file, 'basiPositive')">
                              <i class="el-icon-download"></i>
                            </span>
                            <span v-if="!basicDisabledPositive" class="el-upload-list__item-delete" @click="handleRemove(file, 'basiPositive')">
                              <i class="el-icon-delete"></i>
                            </span>
                          </span>
                          </div>
                        </el-upload>
                        <el-dialog :visible.sync="basicDialogVisiblePositive">
                          <img width="100%" :src="basicForm.basicDialogImageUrlPositive" alt="">
                        </el-dialog>
                      </div>
                      <div class="authentication-file-item">
                        <el-upload
                            action="#"
                            list-type="picture-card"
                            :auto-upload="false"
                            :limit="1">
                          <img src="@/assets/images/pki-web_61.png" alt="" slot="default" v-show="basicBack" @click="fileControlToggle('basicBack')">
                          <div slot="file" slot-scope="{file}">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                            <span class="el-upload-list__item-actions">
                            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file, 'basiBack')">
                              <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!basicDisabledBack" class="el-upload-list__item-delete" @click="handleDownload(file, 'basiBack')">
                              <i class="el-icon-download"></i>
                            </span>
                            <span v-if="!basicDisabledBack" class="el-upload-list__item-delete" @click="handleRemove(file, 'basiBack')">
                              <i class="el-icon-delete"></i>
                            </span>
                          </span>
                          </div>
                        </el-upload>
                        <el-dialog :visible.sync="basicDialogVisibleBack">
                          <img width="100%" :src="basicForm.basicDialogImageUrlBack" alt="">
                        </el-dialog>
                      </div>
                    </el-form-item>
                    <el-form-item label="头像" class="file-upload">
                      <el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :before-remove="beforeRemove"
                          multiple
                          :limit="3"
                          :on-exceed="handleExceed"
                          :file-list="basicForm.basicHeadFileList">
                        <el-button class="standard-btn" size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">支持扩展名jpg.png格式,1M以内建议尺寸:100*100</div>
                      </el-upload>
                    </el-form-item>
                    <el-form-item class="submit-btn">
                      <el-button ref="pBtns" type="primary" class="standard-btn" id="basic" @click="onSubmit('basicForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
            <div class="personal-information-right white-bg">
              <div class="basic personal-r">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">企业信息</div>
                </div>
                <div class="personal-form">
                  <el-form ref="enterpriseForm" :model="enterpriseForm" label-width="110px" :rules="enterpriseNameRules">
                    <el-form-item label="企业名称">
                      <el-input v-model="enterpriseForm.enterpriseName"></el-input>
                      <span ref="formNull" class="form-null" v-if="enterpriseForm.enterpriseName == ''">未填写</span>
                    </el-form-item>
                    <el-form-item prop="enterpriseCreditCode" label="统一信用码">
                      <el-input v-model="enterpriseForm.enterpriseCreditCode"></el-input>
                      <span ref="formNull" class="form-null" v-if="enterpriseForm.enterpriseCreditCode == ''">未填写</span>
                    </el-form-item>
                    <el-form-item prop="enterpriseEmail" label="邮箱">
                      <el-input v-model="enterpriseForm.enterpriseEmail"></el-input>
                      <span ref="formNull" class="form-null" v-if="enterpriseForm.enterpriseEmail == ''">未填写</span>
                    </el-form-item>
                    <el-form-item label="联系方式">
                      <el-input v-model="enterpriseForm.enterpriseTel"></el-input>
                      <span ref="formNull" class="form-null" v-if="enterpriseForm.enterpriseTel == ''">未填写</span>
                    </el-form-item>
                    <el-form-item class="submit-btn">
                      <el-button ref="pBtns" type="primary" class="standard-btn" id="enterprise" @click="onSubmit('enterpriseForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </div>
          <div class="right" :ref="'rightHeight' + toggleContent" v-else-if="toggleContent == 1">
            <div class="personal-information-right white-bg">
              <div class="basic personal-r">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">账号安全</div>
                </div>
                <div class="personal-form">
                  <el-form ref="accountForm" :model="accountForm" label-width="110px" :rules="accountRules">
                    <el-form-item prop="basicUser" label="登录密码">
                      <el-input type="hidden" v-model="accountForm.accountPassword" maxlength="20" @input="passwordcomplex()"></el-input>
                      <password-strength style="margin-right: 250px;" :passwordVal="accountForm.accountPassword" :score="score"></password-strength>
                      <span class="form-update">修改</span>
                    </el-form-item>
                    <el-form-item prop="accountPhone" label="手机号">
                      <el-input class="readonly" :readonly="true" v-model="accountForm.accountPhone"></el-input>
                    </el-form-item>
<!--                    <el-form-item prop="authenticationID" label="邮箱">
                      <el-input class="readonly" :readonly="true" v-model="accountForm.accountEmail"></el-input>
                      <span class="form-update">修改</span>
                    </el-form-item>-->
                    <el-form-item class="submit-btn">
                      <el-button ref="pBtns" type="primary" class="standard-btn" id="account" @click="onSubmit('accountForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </div>
          <div class="right" :ref="'rightHeight' + toggleContent" v-else-if="toggleContent == 2">
            <div class="personal-information-right white-bg">
              <div class="basic personal-r">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">认证管理</div>
                </div>
                <div class="personal-table">
                  <div class="personal-tabs">
                    <el-button type="primary" class="add-authentication-btn standard-btn" @click="addAuthentication">新增认证申请</el-button>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="已申请" name="已申请">
                        <div class="authentication-tabs-form">
                          <el-row class="authentication-tabs-form-screen">
                            <el-col :span="3" class="authentication-tabs-form-screen-title">时间筛选</el-col>
                            <el-col :span="2">
                              <el-button type="text" class="screen-btn" @click="authenticationListDate(3)">近3个月</el-button>
                            </el-col>
                            <el-col :span="2">
                              <el-button type="text" class="screen-btn" @click="authenticationListDate(6)">近6个月</el-button>
                            </el-col>
                            <el-col :span="3">
                              <el-button type="text" class="screen-btn" @click="authenticationListDate(12)">近1年</el-button>
                            </el-col>
                            <el-col :span="6">
                              <el-date-picker
                                  v-model="authenticationDateValue"
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期">
                              </el-date-picker>
                            </el-col>
                          </el-row>
                          <div class="authentication-table">
                            <el-table
                                :data="authenticationTableData"
                                stripe
                                v-loading="loading"
                                style="width: 100%;"
                                :header-cell-style="{background:'#eef5fd',color:'#333333', fontWeight: 500}">
                              <el-table-column
                                  prop="productType"
                                  label="产品类型"
                                  width="80">
                              </el-table-column>
                              <el-table-column
                                  prop="adaptedProducts"
                                  label="适配产品"
                                  width="130">
                              </el-table-column>
                              <el-table-column
                                  prop="date"
                                  label="提交时间"
                                  width="100"
                                  :formatter="authenticationTableFormatter">
                                <template>
                                  <div v-for="(item, index) in authenticationTableData" :key="index">
                                    <div>{{ item.date }}</div>
                                  </div>
                                </template>
                              </el-table-column>
                              <el-table-column
                                  prop="auditData"
                                  label="审核资料"
                                  width="80">
                              </el-table-column>
                              <el-table-column
                                  prop="applicationStatus"
                                  label="申请状态"
                                  width="80">
                                <template slot-scope="scope">
                                  <el-tag size="mini" v-if="scope.row.applicationStatus == '已申请'">{{ scope.row.applicationStatus }}</el-tag>
                                  <el-tag size="mini" type="warning" v-else>{{ scope.row.applicationStatus }}</el-tag>
                                </template>
                              </el-table-column>
                              <el-table-column
                                  prop="reportDownload"
                                  label="测试报告下载"
                                  width="110">
                                <template slot-scope="scope">
                                  <router-link class="report-download" :to="{path: '/'}">{{ scope.row.reportDownload }}</router-link>
                                </template>
                              </el-table-column>
                              <el-table-column
                                  label="操作"
                                  class="operation-btns"
                                  width="200">
                                <template slot-scope="scope">
                                  <el-button @click="handleClick(scope.row)" type="primary" class="green-ghost-btn" plain size="small">查看</el-button>
                                  <el-button type="primary" class="standard-ghost-btn" plain size="small">修改</el-button>
                                  <el-popover placement="right" width="220" trigger="hover" :visible-arrow="false" popper-class="more-btns" :append-to-body="false">
                                    <el-button type="primary" class="red-ghost-btn" plain size="mini">删除</el-button>
                                    <el-button type="primary" class="standard-ghost-btn" plain size="mini">配置</el-button>
                                    <el-button slot="reference" icon="el-icon-more" class="more-btn"></el-button>
                                  </el-popover>
                                </template>
                              </el-table-column>
                            </el-table>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="已兼容适配" name="已兼容适配">已兼容适配</el-tab-pane>
                      <el-tab-pane label="问题及留言" name="问题及留言">问题及留言</el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right" :ref="'rightHeight' + toggleContent" v-else-if="toggleContent == 3">
            <div class="personal-information-right white-bg">
              <div class="basic personal-r">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">EFI签名管理</div>
                </div>
                <div class="personal-table">
                  <div class="personal-tabs">
                    <div class="efi-apply" v-show="efiApply == 0">
                      <img src="@/assets/images/apply.png" alt="">
                      <div class="efi-text">如果您想要发布认证申请必须先通过企业认证!</div>
                      <el-button type="primary" class="add-efi-btn standard-btn" @click="addEfi">新增认证申请</el-button>
                    </div>
                    <div class="apply-form" v-show="efiApply == 1">
                      <div class="timeaxis" >
                        <div v-for="(item, index) in tiemLineList" :key="index" class="timeline-item">
                          <div class="box">
                            <div class="item" :class="[isTimeLineCircularActive > index ? 'timeline-green-line' : '', isTimeLineCircularActive == index ? 'timeline-line-active' : '', isTimeLineCircularActive < index ? 'item': '']">
                              <div class="center-fonts">
                                <div class="left">{{item.warnname}}</div>
                                <div class="center">{{item.condation}}</div>
                              </div>
                            </div>
                            <div class="circular" :class="[isTimeLineCircularActive > index ? 'timeline-green-circular' : '', isTimeLineCircularActive == index ? 'timeline-circular-active' : '', isTimeLineCircularActive < index ? 'circular': '']">
                              <i class="el-icon-check white-color timeline-icon" v-if="isTimeLineCircularActive > index"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="personal-form" v-if="isTimeLineCircularActive == 0">
                        <el-form ref="efiForm" :model="efiForm" label-width="120px" :rules="efiNameRules">
                          <el-form-item label="EFI文件名称" prop="efiFileName">
                            <el-input v-model="efiForm.efiFileName"></el-input>
                            <span ref="formNull" class="form-null" v-if="efiForm.efiFileName == ''">未填写</span>
                          </el-form-item>
                          <el-form-item label="EFI文件" class="file-upload">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="efiForm.efiFileList">
                              <el-button class="standard-btn" size="small" type="primary">点击上传</el-button>
                              <div slot="tip" class="el-upload__tip">支持扩展名jpg.png格式,1M以内建议尺寸:100*100</div>
                            </el-upload>
                          </el-form-item>
                          <el-form-item prop="efiFileDescribe" label="EFI文件描述">
                            <el-input type="textarea" v-model="efiForm.efiFileDescribe" resize="none"></el-input>
                          </el-form-item>
                          <el-form-item class="submit-btn">
                            <el-button ref="pBtns" type="primary" class="standard-btn" id="efi-btn" @click="onSubmit('efiForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                      <div class="personal-form" v-else-if="isTimeLineCircularActive == 1">
                        <el-form ref="efiForm" :model="efiForm" label-width="120px" :rules="efiNameRules">
                          <el-form-item label="EFI文件名称2" prop="efiFileName">
                            <el-input v-model="efiForm.efiFileName"></el-input>
                            <span ref="formNull" class="form-null" v-if="efiForm.efiFileName == ''">未填写</span>
                          </el-form-item>
                          <el-form-item label="EFI文件" class="file-upload">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="efiForm.efiFileList">
                              <el-button class="standard-btn" size="small" type="primary">点击上传</el-button>
                              <div slot="tip" class="el-upload__tip">支持扩展名jpg.png格式,1M以内建议尺寸:100*100</div>
                            </el-upload>
                          </el-form-item>
                          <el-form-item prop="efiFileDescribe" label="EFI文件描述">
                            <el-input type="textarea" v-model="efiForm.efiFileDescribe" resize="none"></el-input>
                          </el-form-item>
                          <el-form-item class="submit-btn">
                            <el-button ref="pBtns" type="primary" class="standard-btn" id="efi" @click="onSubmit('efiForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                      <div class="personal-form" v-else-if="isTimeLineCircularActive == 2">
                        <el-form ref="efiForm" :model="efiForm" label-width="120px" :rules="efiNameRules">
                          <el-form-item label="EFI文件名称3" prop="efiFileName">
                            <el-input v-model="efiForm.efiFileName"></el-input>
                            <span ref="formNull" class="form-null" v-if="efiForm.efiFileName == ''">未填写</span>
                          </el-form-item>
                          <el-form-item label="EFI文件" class="file-upload">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="efiForm.efiFileList">
                              <el-button class="standard-btn" size="small" type="primary">点击上传</el-button>
                              <div slot="tip" class="el-upload__tip">支持扩展名jpg.png格式,1M以内建议尺寸:100*100</div>
                            </el-upload>
                          </el-form-item>
                          <el-form-item prop="efiFileDescribe" label="EFI文件描述">
                            <el-input type="textarea" v-model="efiForm.efiFileDescribe" resize="none"></el-input>
                          </el-form-item>
                          <el-form-item class="submit-btn">
                            <el-button ref="pBtns" type="primary" class="standard-btn" id="efi" @click="onSubmit('efiForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                      <div class="personal-form" v-else-if="isTimeLineCircularActive == 3">
                        <el-form ref="efiForm" :model="efiForm" label-width="120px" :rules="efiNameRules">
                          <el-form-item label="EFI文件名称4" prop="efiFileName">
                            <el-input v-model="efiForm.efiFileName"></el-input>
                            <span ref="formNull" class="form-null" v-if="efiForm.efiFileName == ''">未填写</span>
                          </el-form-item>
                          <el-form-item label="EFI文件" class="file-upload">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="efiForm.efiFileList">
                              <el-button class="standard-btn" size="small" type="primary">点击上传</el-button>
                              <div slot="tip" class="el-upload__tip">支持扩展名jpg.png格式,1M以内建议尺寸:100*100</div>
                            </el-upload>
                          </el-form-item>
                          <el-form-item prop="efiFileDescribe" label="EFI文件描述">
                            <el-input type="textarea" v-model="efiForm.efiFileDescribe" resize="none"></el-input>
                          </el-form-item>
                          <el-form-item class="submit-btn">
                            <el-button ref="pBtns" type="primary" class="standard-btn" id="efi" @click="onSubmit('efiForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                    </div>
                    <div class="authentication-table efi-table" v-show="efiApply == 2">
                      <el-table
                          :data="authenticationTableData"
                          stripe
                          v-loading="loading"
                          style="width: 100%;"
                          :header-cell-style="{background:'#eef5fd',color:'#333333', fontWeight: 500}">
                        <el-table-column
                            prop="productType"
                            label="产品类型"
                            width="80">
                        </el-table-column>
                        <el-table-column
                            prop="adaptedProducts"
                            label="适配产品"
                            width="130">
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="提交时间"
                            width="100"
                            :formatter="authenticationTableFormatter">
                          <template>
                            <div v-for="(item, index) in authenticationTableData" :key="index">
                              <div>{{ item.date }}</div>
                            </div>
                          </template>
                        </el-table-column>
                        <el-table-column
                            prop="auditData"
                            label="审核资料"
                            width="80">
                        </el-table-column>
                        <el-table-column
                            prop="applicationStatus"
                            label="申请状态"
                            width="80">
                          <template slot-scope="scope">
                            <el-tag size="mini" v-if="scope.row.applicationStatus == '已申请'">{{ scope.row.applicationStatus }}</el-tag>
                            <el-tag size="mini" type="warning" v-else>{{ scope.row.applicationStatus }}</el-tag>
                          </template>
                        </el-table-column>
                        <el-table-column
                            prop="reportDownload"
                            label="测试报告下载"
                            width="110">
                          <template slot-scope="scope">
                            <router-link class="report-download" :to="{path: '/'}">{{ scope.row.reportDownload }}</router-link>
                          </template>
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            class="operation-btns"
                            width="200">
                          <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="primary" class="green-ghost-btn" plain size="small">查看</el-button>
                            <el-button type="primary" class="standard-ghost-btn" plain size="small">修改</el-button>
                            <el-popover placement="right" width="220" trigger="hover" :visible-arrow="false" popper-class="more-btns" :append-to-body="false">
                              <el-button type="primary" class="red-ghost-btn" plain size="mini">删除</el-button>
                              <el-button type="primary" class="standard-ghost-btn" plain size="mini">配置</el-button>
                              <el-button slot="reference" icon="el-icon-more" class="more-btn"></el-button>
                            </el-popover>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-content">
      <el-dialog title="" :visible.sync="authenticationDialogFormVisible">
        <div class="technical-introduction-fonts">
          <div class="technical-introduction-title">认证管理</div>
        </div>
        <el-form :model="authenticationDialogForm" class="personal-form">
          <el-form-item label="商务联系人" :label-width="formLabelWidth">
            <el-input v-model="authenticationDialogForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商务联系人电话" :label-width="formLabelWidth">
            <el-input v-model="authenticationDialogForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商务联系人证件类型" :label-width="formLabelWidth">
            <el-input v-model="authenticationDialogForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商务联系人证件号码" :label-width="formLabelWidth">
            <el-input v-model="authenticationDialogForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司网站" :label-width="formLabelWidth">
            <el-input v-model="authenticationDialogForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司简介" :label-width="formLabelWidth">
            <el-input v-model="authenticationDialogForm.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" class="standard-btn" @click="authenticationDialogFormVisible = false">确 定</el-button>
          <el-button class="standard-ghost-btn" @click="authenticationDialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
    <footer-web></footer-web>
    <to-top></to-top>
  </div>
</template>

<script>
import navMenu from "@/components/nav/nav-menu";
import footerWeb from "@/components/footer/footer";
import toTop from "@/components/to-top/to-top";
import crumb from "@/components/crumb/crumb";
import passwordStrength from "@/components/passwordStrength/passwordStrength";

export default {
  name: "personal-page",
  components: {
    navMenu, // 横向导航栏 + LOGO
    footerWeb, // 网站页脚
    toTop, // 回到顶部
    crumb, // 面包屑
    passwordStrength, // 检测密码强度
  },
  data() {
    return {
      toggleContent: 0, // 控制点击切换右侧表单信息
      showTips: true, // 基本信息-提示语显示开关
      score: 0, // 检测密码强度
      basicDialogVisiblePositive: false, // 身份证照片-正面
      basicPositive: true, // 身份证照片-正面 上传控件显示开关
      basicDisabledPositive: false, // 身份证照片-正面
      basicDialogVisibleBack: false, // 身份证照片-背面
      basicBack: true, // 身份证照片-背面 上传控件显示开关
      basicDisabledBack: false, // 身份证照片-背面
      activeName: '已申请', // 企业认证管理-Tabs切换卡当前高亮
      authenticationDateValue: "", // 企业认证管理-日期控件初始值
      loading: false, // 加载动画显示开关
      authenticationDialogFormVisible: false, // 弹出层显示开关
      tabsMenusAggregate: [], // Tab切换卡集合
      tabsName: "个人中心", // 根据当前页面标题
      authenticationDialogForm: { // 弹出层表单
        name: '',
      },
      formLabelWidth: '160px',
      efiApply: 0, // EFI签名管理列表显示/隐藏
      isTimeLineCircularActive: 0, // 根据申请步骤动态切换Class，改变对应元素样式
      tiemLineList:[
        {
          warnname: "注册企业用户",
          condation: "01",
        }, {
          warnname: "镜像下载与安装",
          condation: "02",
        }, {
          warnname: "认证申请",
          condation: "03",
        }, {
          warnname: "发布兼容",
          condation: "04",
        },
      ],
      authenticationTableData: [{
        date: '2021-12-23',
        productType: 'A类型',
        adaptedProducts: '产品',
        auditData: '资料',
        applicationStatus: '已申请',
        reportDownload: '下载',
      },{
        date: '2022-05-02',
        productType: 'A类型',
        adaptedProducts: '产品',
        auditData: '资料',
        applicationStatus: '已申请',
        reportDownload: '下载',
      }, {
        date: '2022-09-06',
        productType: 'C类型',
        adaptedProducts: '产品',
        auditData: '资料',
        applicationStatus: '未申请',
        reportDownload: '下载',
      }, {
        date: '2023-01-05',
        productType: 'B类型',
        adaptedProducts: '产品',
        auditData: '资料',
        applicationStatus: '已申请',
        reportDownload: '下载',
      }, {
        date: '2023-01-11',
        productType: 'A类型',
        adaptedProducts: '产品',
        auditData: '资料',
        applicationStatus: '已申请',
        reportDownload: '下载',
      }],
      personalToggle: [ // 个人中心-左侧切换列表
        {
          id: 0,
          class: "personal-basic-icon",
          title: "基本信息"
        }, {
          id: 2,
          class: "personal-account-icon",
          title: "账号安全"
        }, {
          id: 1,
          class: "personal-authentication-icon",
          title: "企业认证管理"
        }, {
          id: 3,
          class: "personal-certificate-icon",
          title: "EFI签名管理"
        }
      ],
      basicForm: { // 基本信息-个人信息
        basicUser: "", // 基本信息-个人信息-用户名
        basicName: "", // 基本信息-个人信息-姓名
        basicEmail: "", // 基本信息-个人信息-邮箱
        basicEnterpriseName: "", // 基本信息-个人信息-企业名称
        basicPhone: "13843006161", // 基本信息-个人信息-手机号码
        basicHeadFileList: [], // 基本信息-个人信息-头像上传
        basicFileList: [], // 基本信息-个人信息-身份证照片上传
        basicDialogImageUrlPositive: '', // 身份证照片-正面
        basicDialogImageUrlBack: '', // 身份证照片-背面
      },
      enterpriseForm: { // 基本信息-企业信息
        enterpriseName: "", // 基本信息-企业信息-企业名称
        enterpriseTel: "", // 基本信息-企业信息-联系方式
        enterpriseEmail: "", // 基本信息-企业信息-邮箱
        enterpriseCreditCode: "", // 基本信息-企业信息-统一信用码
      },
      accountForm: { // 账户安全
        accountEmail: "", // 账户安全-邮箱
        accountPhone: "138****6161", // 账户安全-手机号码
        accountPassword: "", // 账户安全-登录密码
      },
      authenticationForm: { // 企业认证管理
        authenticationID: "", // 企业认证管理-企业名称
        authenticationPhone: "", // 企业认证管理-邮箱
        authenticationUser: "", // 企业认证管理-用户名
      },
      efiForm: { // EFI签名管理-申请
        efiFileName: "", // EFI签名管理-EFI文件名称
        efiFileList: [], // EFI签名管理-EFI文件
        efiFileDescribe: "", // EFI签名管理-EFI文件描述
      },
      queryParmas: { // 查询参数
        basicUser: undefined, // 基本信息-个人信息-用户名
        basicName: undefined, // 基本信息-个人信息-姓名
        basicEmail: undefined, // 基本信息-个人信息-邮箱
        basicFileList: undefined, // 基本信息-个人信息-上传文件
        basicHeadFileList: undefined, // 基本信息-个人信息-头像上传文件
        basicEnterpriseName: undefined, // 基本信息-个人信息-企业名称
        basicPhone: undefined, // 基本信息-个人信息-手机号码
        basicDialogImageUrlPositive: undefined, // 身份证照片-正面
        basicDialogImageUrlBack: undefined, // 身份证照片-背面
        enterpriseName: undefined, // 基本信息-企业信息-企业名称
        enterpriseTel: undefined, // 基本信息-企业信息-联系方式
        enterpriseEmail: undefined, // 基本信息-企业信息-邮箱
        enterpriseCreditCode: undefined, // 基本信息-企业信息-统一信用码
        authenticationID: undefined, // 企业认证管理-企业名称
        authenticationPhone: undefined, // 企业认证管理-邮箱
        authenticationUser: undefined, // 企业认证管理-用户名
        authenticationDialogImageUrlPositive: undefined, // 身份证照片-正面
        authenticationDialogImageUrlBack: undefined, // 身份证照片-正面
        efiFileName: undefined, // EFI签名管理-EFI文件名称
        efiFileList: undefined, // EFI签名管理-EFI文件
        efiFileDescribe: undefined, // EFI签名管理-EFI文件描述
      },
      basicRules: { // 基本信息-个人信息-表单校验
        basicUser: [ // 基本信息-个人信息-用户名
          {required: true, message: "用户名不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        basicName: [ // 基本信息-个人信息-姓名
          {required: true, message: "姓名不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        basicEmail: [ // 基本信息-个人信息-邮箱
          {required: true, message: "邮箱不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        basicEnterpriseName: [ // 基本信息-个人信息-企业名称
          {required: true, message: "企业名称不能为空", trigger: "blur"},
          {max: 4, message: "长度不能超过4个字符", trigger: "blur"}
        ],
        basicFileList: [ // 基本信息-个人信息-身份证照片
          {required: true, message: "请上传身份证照片", trigger: "blur"}
        ],
      },
      enterpriseNameRules: { // 基本信息-企业信息-表单校验
        enterpriseEmail: [ // 基本信息-企业信息-邮箱
          {required: true, message: "邮箱不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        enterpriseCreditCode: [ // 基本信息-企业信息-统一信用码
          {required: true, message: "统一信用码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
      },
      accountRules: { // 账户安全-表单校验
        accountEmail: [ // 账户安全-邮箱
          {required: true, message: "邮箱不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        accountPhone: [ // 账户安全-手机号码
          {required: true, message: "手机号码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        accountPassword: [ // 账户安全-登录密码
          {required: true, message: "登录密码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
      },
      authenticationRules: { // 企业认证管理-表单校验
        authenticationUser: [ // 企业认证管理-用户名
          {required: true, message: "用户名不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        authenticationPhone: [ // 企业认证管理-手机号码
          {required: true, message: "手机号码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        authenticationID: [ // 企业认证管理-身份证号
          {required: true, message: "身份证号不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        authenticationFileList: [ // 身份证照片-正面
          {required: true, message: "请上传身份证照片", trigger: "blur"}
        ],
      },
      efiNameRules: { // EFI签名管理-表单校验
        efiFileName: [ // EFI签名管理-EFI文件名称
          {required: true, message: "EFI文件名称不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        efiFileList: [ // EFI签名管理-EFI文件
          {required: true, message: "请上传EFI文件", trigger: "blur"}
        ],
        efiFileDescribe: [ // EFI签名管理-EFI文件描述
          {required: true, message: "EFI文件描述不能为空", trigger: "blur"},
          {max: 100, message: "长度不能超过100个字符", trigger: "blur"}
        ],
      },
    }
  },
  computed: {
    set() {
      return [
        this.$store.state.tabsAggregate, // 获取Vuex中的控制二级导航当前点击的高亮名称
      ]
    },
  },
  watch: {
    set(newVal) {
      this.tabsMenus = newVal[0] // 将存储在Vuex中的控制二级导航当前点击的高亮名称
    },
  },
  created() {
    let _this = this
    _this.$nextTick(() => {
      for (let j = 0; j < _this.personalToggle.length; j++) {
        let tabDoms = _this.personalToggle
        _this.tabsMenusAggregate.push(
            {
              tab: _this.tabsName,
              tabItem: tabDoms[j]
            }
        )
      }
    })
    this.$store.dispatch("setTabsActiveValue", [_this.tabsMenusAggregate, _this.personalToggle[_this.toggleContent].title, _this.tabsName, "/personal"]) // 将存储的值传给Vuex中存储
    this.$store.dispatch("setNewsCaseSwitchValue", false) // 页面初始化不显示面包屑第三级标题
  },
  mounted() {},
  methods: {
    /* 左侧页面切换区点击事件 */
    togglePersonal(obj, index) {
      let _this = this
      _this.toggleContent = index
      _this.$store.dispatch("setTabsActiveValue", [_this.tabsMenusAggregate, _this.personalToggle[index].title, _this.tabsName, "/personal"]) // 将存储的值传给Vuex中存储
    },
    /* 提交按钮 */
    onSubmit(formName) {
      let _this = this
      _this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == "efiForm") {
            _this.isTimeLineCircularActive++
            if (_this.isTimeLineCircularActive == _this.tiemLineList.length) {
              _this.efiApply = 2
            }
          }
          //this.$router.replace({path: "/home"})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /* 企业认证管理-Tabs切换卡切换事件 */
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getDate() {
      let timestamp = Date.parse(new Date());
      // let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      // let Y = date.getFullYear() + "-";
      // let M = (date.getMonth() + 1 < 10? "0" + (date.getMonth() + 1): date.getMonth() + 1) + "-";
      // let D =(date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
      //return Y + M + D;
      return timestamp
    },
    authenticationListDate(date) {
      this.getDate()
      for (let i = 0; i < this.authenticationTableData.length; i++) {
        console.log(date, this.authenticationTableData[i].date)
      }
    },
    authenticationTableFormatter(row, cellValue) {
      console.log(Date.parse(row.date))
      const res = this.authenticationTableData.filter((item) => {
        return item.date === cellValue
      })
      for (let i = 0; i < this.authenticationTableData.length; i++) {
        return res[i].date
      }
    },
    /* 删除上传文件 */
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    /* 上传文件 */
    handlePreview(file) {
      console.log(file);
    },
    /* 上传文件限制 */
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    /* 企业认证管理-删除上传身份证照片 */
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    /* 企业认证管理-身份证照片放大 */
    handlePictureCardPreview(file, name) {
      if (name == "basiPositive") {
        this.basicForm.basicDialogImageUrlPositive = file.url;
        this.basicDialogVisiblePositive = true;
      } else if (name == "basicBack") {
        this.basicForm.basicDialogImageUrlBack = file.url;
        this.basicDialogVisibleBack = true;
      } else if (name == "authenticationPositive") {
        this.authenticationForm.authenticationDialogImageUrlPositive = file.url;
        this.authenticationDialogVisiblePositive = true;
      }
    },
    fileControlToggle(name) {
      if (name == "basiPositive") {
        this.basicPositive = false
      } else if (name == "basicBack") {
        this.basicBack = false
      } else if (name == "authenticationPositive") {
        this.authenticationPositive = false
      }
    },
    handleDownload(file) {
      console.log(file);
    },
    /* 检测密码输入强度 */
    passwordcomplex(){
      let passwordscore = 0
      let pwdArr = this.accountForm.accountPassword.split('');
      // pwdLen长度
      if(pwdArr.length>4&&pwdArr.length<=7){  //长度在4-7之间，加五分
        passwordscore += 5
      }else if(pwdArr.length>7){  //长度在7以上，加10分
        passwordscore += 10
      }
      // letter字母
      if(pwdArr.some(item => {return /^[a-z]$/.test(item)})){  //是否存在小写字母
        if(pwdArr.some(item => {return /^[A-Z]$/.test(item)})){  //是否存在大写字母
          passwordscore += 10   //大小写都有，加10，否则加5
        }else{
          passwordscore += 5
        }
      }else if(pwdArr.some(item => {return /^[A-Z]$/.test(item)})){
        passwordscore += 5
      }
      //num数字
      if(pwdArr.some(item => {return /^[0-9]$/.test(item)})){ //判断是否存在数字
        let count = 0
        pwdArr.forEach(item => {   //判断数字出现的次数
          if(/^[0-9]$/.test(item)){
            count++
          }
        })
        if(count>=3){  //出现大于等于3次，加10，否则加5
          passwordscore += 10;
        }else{
          passwordscore += 5;
        }
      }
      //special特殊字符
      if(pwdArr.some(item => {return /^[\^%&'*.,;=+\-?@#!$\x22]$/.test(item)})){ //判断是否存在特殊字符
        let count = 0
        pwdArr.forEach(item => {  //特殊字符出现次数
          if(/^[\^%&'*.,;=+\-?@#!$\x22]$/.test(item)){
            count++
          }
        })
        if(count>=2){
          passwordscore += 15;  //出现两次以上加15，否则加5
        }else{
          passwordscore += 5;
        }
      }
      //是否连续
      let isContinued = false;
      let countinuedCount = 0;
      for(let i =0;i<pwdArr.length;i++){
        if(pwdArr[i+1]){
          if((pwdArr[i].charCodeAt(0)+1==pwdArr[i+1].charCodeAt(0))||(pwdArr[i].charCodeAt(0)-1==pwdArr[i+1].charCodeAt(0))){  //如果相邻两个字符连续
            isContinued = true;  //开始记录连续
            countinuedCount++    //记录连续次数
          }else{
            if(isContinued){
              isContinued = false;
              passwordscore -= countinuedCount   //结束当前连续时，分数扣掉连续次数
              countinuedCount = 0
            }
          }
        }
      }
      if(countinuedCount == pwdArr.length-1){
        passwordscore = 0   //如果整个密码连续，分数为0
      }else{
        passwordscore -= countinuedCount
      }
      if(pwdArr.length<8){  //需求规定的，密码必须大于8位
        passwordscore = 0
      }
      for(let i = 0;i<pwdArr.length;i++){  //如果整个密码由单一字符构成，分数为0
        if(i ==pwdArr.length-1){
          passwordscore = 0
        }else if(pwdArr[i]!=pwdArr[i+1]){
          break
        }
      }
      this.score = passwordscore
    },
    /* 新增企业认证申请 */
    addAuthentication() {
      this.authenticationDialogFormVisible = true
    },
    /* 新增EFI签名管理申请 */
    addEfi() {
      let _this = this
      _this.efiApply = 1
      //_this.$router.replace({path: "/"})
    },
  }
}
</script>

<style scoped>
.personal-information-content {
  overflow: hidden;
  position: relative;
}

.right {
  width: calc(100% - 300px);
  padding-left: 300px;
}

.personal-information-toggle {
  width: 280px;
  min-width: 280px;
  height: 100%;
  margin-right: 20px;
  padding: 50px 0;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}

.personal-information-photo {
  text-align: center;
  margin-bottom: 50px;
}

.personal-header-photo {
  width: 120px;
  height: 120px;
  background-color: #f4f9ff;
  border: 1px solid #cbe0ff;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px auto;
}

.personal-header-photo img {
  position: relative;
  top: 20px;
}

.personal-information-phone {
  color: #666666;
  font-size: 16px;
}

.personal-toggle {
  position: relative;
}

.personal-toggle-item {
  border-bottom: 1px solid #f0eeee;
  line-height: 45px;
  color: #999999;
  cursor: pointer;
}

.personal-toggle-icons {
  display: inline-block;
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 10px;
  position: relative;
  top: 12px;
  left: 32px;
  transition: all 0.3s;
}

.personal-basic-icon {
  background-image: url("../../assets/images/pki-web_54.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.personal-account-icon {
  background-image: url("../../assets/images/pki-web_67.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.personal-authentication-icon {
  background-image: url("../../assets/images/pki-web_62.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto 90%;
}

.personal-certificate-icon {
  background-image: url("../../assets/images/pki-web_56.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.personal-toggle-title {
  transition: all 0.3s;
  text-indent: 2em;
}

.personalToggleActive,
.personal-toggle-item:hover .personal-toggle-title {
  color: #0073eb;
}

.personalToggleActive .personal-basic-icon,
.personal-toggle-item:hover .personal-basic-icon {
  background-image: url("../../assets/images/pki-web_53.png");
}

.personalToggleActive .personal-account-icon,
.personal-toggle-item:hover .personal-account-icon {
  background-image: url("../../assets/images/pki-web_65.png");
}

.personalToggleActive .personal-authentication-icon,
.personal-toggle-item:hover .personal-authentication-icon {
  background-image: url("../../assets/images/pki-web_63.png");
}

.personalToggleActive .personal-certificate-icon,
.personal-toggle-item:hover .personal-certificate-icon {
  background-image: url("../../assets/images/pki-web_57.png");
}

.personal-information-right {
  padding: 50px;
  min-height: 500px;
  margin-bottom: 20px;
}

.personal-information-right:last-child {
  margin-bottom: 0;
}

/* 个人中心-基本信息 开始 */
.personal-information-basic-tips {
  width: 100%;
  line-height: 30px;
  background-color: #eaf4ff;
  color: #666666;
  font-size: 12px;
  margin-top: 20px;
}

.personal-information-basic-tips-icon {
  display: inline-block;
  width: 16px;
  height: 20px;
  margin: 5px 10px;
  background-image: url("../../assets/images/pki-web_50.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.personal-form {
  margin-top: 40px;
}

.personal-form /deep/ .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap > .el-form-item__label:before,
.personal-form /deep/ .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
  content: "";
  margin: 0;
}

.personal-form /deep/ .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap > .el-form-item__label:after,
.personal-form /deep/ .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:after {
  content: "*";
  margin-right: 0;
  margin-left: 3px;
  color: #FF0000;
}

.personal-form /deep/ .el-form-item__label {
  text-align: left;
}

.personal-form /deep/ .el-input__inner {
  width: 430px;
  height: 30px;
  border-color: #dddbdb;
  border-radius: 0;
  transition: all 0.3s;
}

.personal-form /deep/ .el-textarea__inner {
  width: 430px;
  border-color: #dddbdb;
  border-radius: 0;
  transition: all 0.3s;
  font-size: 16px;
  font-family: "Microsoft YaHei";
}

.personal-form /deep/ .el-input__inner:hover,
.personal-form /deep/ .el-textarea__inner:hover {
  border-color: #0073eb;
}

.personal-form /deep/ .el-form-item__label,
.personal-form /deep/ .el-input__inner {
  color: #666666;
  font-size: 16px;
}

.personal-form /deep/ .el-input {
  display: inline-block;
  float: left;
  width: auto;
}

.readonly /deep/ .el-input__inner {
  border: none;
  padding: 0;
}

.form-null {
  font-size: 16px;
  color: #999999;
  float: left;
  margin-left: 20px;
}

.file-upload /deep/ .el-upload__tip {
  display: inline-block;
  width: 180px;
  margin-left: 20px;
  font-size: 12px;
  color: #999999;
  line-height: 15px;
  margin-top: 0;
  position: relative;
  top: 6px;
}

.authentication-file-upload /deep/ .el-form-item__label {
  float: none;
}

.authentication-file-upload /deep/ .el-form-item__content {
  display: flex;
  margin-left: 0 !important;
  margin-top: 10px;
}

.authentication-file-upload /deep/ .el-upload--picture-card {
  border: none;
  width: auto;
  height: auto;
  position: relative;
}

.authentication-file-upload /deep/ .el-upload--picture-card img {
  width: 100%;
}

.authentication-file-item {
  flex: 1;
}

.authentication-file-item /deep/ .el-upload-list--picture-card .el-upload-list__item {
  width: 100%;
  height: auto;
  border: none;
}

.submit-btn {
  margin-top: 40px;
}

.submit-btn /deep/ .el-form-item__content {
  margin-left: 0 !important;
}

.submit-btn /deep/ .el-button--primary {
  display: block;
  margin: 0 auto;
}

.submit-btn.el-form-item {
  margin-bottom: 0;
}
/* 个人中心-基本信息 结束 */
/* 账户安全 开始 */
.form-update {
  color: #0073eb;
  margin-left: 20px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.form-update:hover {
  color: #333333;
}
/* 账户安全 结束 */
/* 企业认证管理 开始 */
.personal-tabs {
  position: relative;
}

.personal-tabs /deep/ .el-tabs__item {
  height: 20px;
  line-height: 20px;
  margin: 20px 0;
  border-right: 1px solid #DDDDDD;
  font-size: 16px;
  transition: all 0.3s;
}

.personal-tabs /deep/ .el-tabs__item:last-child {
  border-right: none;
}

.personal-tabs /deep/ .el-tabs__item.is-active,
.personal-tabs /deep/ .el-tabs__item:hover {
  color: #0073eb;
}

.personal-tabs /deep/ .el-tabs__active-bar {
  background-color: #0073eb;
}

.personal-tabs /deep/ .el-tabs__nav-wrap::after {
  background-color: #F0EEEE;
}

.add-authentication-btn {
  position: absolute;
  top: 9px;
  right: 40px;
  z-index: 10;
  transition: all 0.3s;
}

.authentication-tabs-form-screen {
  margin: 10px 0 20px 0;
}

.authentication-tabs-form-screen,
.authentication-tabs-form-screen /deep/ .el-col,
.authentication-tabs-form-screen /deep/ .el-col .el-button {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding: 0;
  transition: all 0.3s;
}

.authentication-tabs-form-screen-title {
  color: #999999;
}

.screen-btn {
  color: #333333;
}

.screen-btn:hover {
  color: #0073eb;
}

.add-authentication-btn.el-button--primary:focus,
.add-authentication-btn.el-button--primary:hover {
  background-color: #333333;
  border-color: #333333;
}

.authentication-tabs-form-screen /deep/ .el-input__inner {
  height: 30px;
  line-height: 30px;
  border-radius: 0;
}

.authentication-tabs-form-screen /deep/ .el-input__inner:hover {
  border-color: #0073eb;
}

.authentication-tabs-form-screen /deep/ .el-date-editor .el-range-separator {
  line-height: 24px;
}

.authentication-tabs-form-screen /deep/ .el-input__icon:before,
.authentication-tabs-form-screen /deep/ .el-icon-date:before {
  position: relative;
  bottom: 4px;
}

.authentication-table /deep/ .el-table__row,
.authentication-table /deep/ .el-table__row .el-table__cell .cell,
.authentication-table /deep/ .el-table__row .el-table__cell {
  height: 50px;
  line-height: 50px;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 14px;
}

.operation-btns {
  line-height: 63px;
  position: relative;
  overflow: hidden;
}

.more-btn {
  position: absolute;
  border: none;
  background-color: transparent;
  height: 100%;
}

.report-download {
  text-decoration: none;
  color: #333333;
  transition: all 0.3s;
}

.report-download:hover {
  color: #0073eb;
}
/* 企业认证管理 结束 */
/* EFI签名管理 开始 */
.efi-table {
  margin-top: 20px;
}

.efi-apply img {
  width: 360px;
  margin: 30px auto 10px auto;
  display: block;
}

.efi-text {
  color: #666666;
  font-size: 16px;
  text-align: center;
}

.add-efi-btn {
  margin: 50px auto 0 auto;
  display: block;
}

.timeaxis{
  width: 100%;
  height: 30px;
  padding: 0 50px;
  margin: 60px auto;
  box-sizing: border-box;
  display: flex;
}

.timeline-item {
  flex: 1;
}

.box{
  float: left;
  width: 100%;
  position: relative;
}

.circular{
  border: 3px solid #0073eb;
  box-shadow: 0 0 10px rgba(0, 115, 235, 30%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  margin: 0 auto -4px auto;
  position: absolute;
  top: -6px;
  right: -7px;
  z-index: 10;
}

.timeline-circular-active {
  background-color: #0073eb;
  border: 3px solid #0073eb;
}

.timeline-green-circular {
  background-color: #2EB884;
  border: 3px solid #2EB884;
}

.timeline-icon {
  font-size: 14px;
  font-weight: bolder;
  position: relative;
  bottom: 1px;
}

.item{
  border-bottom: 8px solid #F4F4F4;
  position: relative;
  border-radius: 4px;
}

.timeline-line-active {
  border-bottom: 8px solid #57a7ff;
}

.timeline-green-line {
  border-bottom: 8px solid #2EB884;
}

.center-fonts {
  position: absolute;
  top: -30px;
  left: 10px;
  text-align: center;
}

.left{
  color: #333333;
  font-size: 14px;
  line-height: 18px;
  display: inline-block;
}

.center{
  color: #0073eb;
  font-size: 20px;
  line-height: 18px;
  font-weight: bolder;
  float: left;
  margin-right: 5px;
}
/* EFI签名管理 结束 */
</style>
